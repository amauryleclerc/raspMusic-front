"use strict";
angular.module('raspMusicApp').service(
				'PlayerService',
				[
        'Player',
        '$timeout',
        '$stomp', 'BASE_URL',
        function (Player, $timeout, $stomp, BASE_URL) {

            var onPlayListeners = [];
            var onStateChangeListeners = [];
            var onMusicChangeListeners = [];
            var onTimeChangeListeners = [];
            var onAddListeners = [];
            var onRemoveListeners = [];
            var onPlayListChangeListeners = [];
            var mapMedia = (media) => {
                console.log(media);
                if (!(typeof media.position === 'undefined')) {
                    media.music.position = media.position;
                }
                if (!(typeof media.music === 'undefined')) {
                    return media.music;
                }
                return media;
            };

            var play = (music) => {
                $timeout(onPlayListeners.forEach((listener) => listener(music)));
            }
            var stateChange = (state) => {
                $timeout(onStateChangeListeners.forEach((listener) => listener(state)));
            }
            var musicChange = (music) => {
                $timeout(onMusicChangeListeners.forEach((listener) => listener(music)));
            }
            var timeChange = (time) => {
                $timeout(onTimeChangeListeners.forEach((listener) => listener(time)));
            }
            var add = (music) => {
                $timeout(onAddListeners.forEach((listener) => listener(music)));
            }
            var remove = (music) => {
                $timeout(onRemoveListeners.forEach((listener) => listener(music)));
            }
            var playlistChange = () => {
                Player.getPlaylist(function (data) {
                    let musics = data.map(mapMedia);
                    $timeout(onPlayListChangeListeners.forEach((listener) => listener(musics)));
                });
            }
            Player.getCurrent((data) => {
                musicChange(mapMedia(data));
            });
            Player.getState(s => {
                stateChange(s.result)
            });


            $stomp.connect(`http://${BASE_URL}/websocket`).then(function (frame) {
                var onPlay = $stomp.subscribe('/player/play', function (data, headers, res) {
                    play(mapMedia(data));
                    console.log("play")
                    stateChange({ action: "PLAY" });
                });
                var onPause = $stomp.subscribe('/player/pause', function (data, headers, res) {
                     console.log("pause")
                    stateChange({ action: "PAUSE" });
                });
                var onStop = $stomp.subscribe('/player/stop', function (data, headers, res) {
                     console.log("stop")
                    stateChange({ action: "STOP" });
                });
                var onChange = $stomp.subscribe('/player/change', function (data, headers, res) {
                    musicChange(mapMedia(data));
                });
                var onAdd = $stomp.subscribe('/player/add', function (data, headers, res) {
                    add(mapMedia(data));
                    playlistChange();
                });
                var onRemove = $stomp.subscribe('/player/remove', function (data, headers, res) {
                    remove(mapMedia(data));
                    playlistChange();
                });
                var onTimeChange = $stomp.subscribe('/player/timechange', function (data, headers, res) {
                    timeChange(data);
                });

            });
            var service = {};
            service.getCurrent = function (callback) {
                Player.getCurrent((data) => {
                    callback(mapMedia(data));
                });
            }
            service.onPlay = function (callback) {
                onPlayListeners.push(callback);
            }
            service.onStateChange = function (callback) {
                onStateChangeListeners.push(callback);
            }
            service.onMusicChange = function (callback) {
                onMusicChangeListeners.push(callback);
            }
            service.onPlayListChange = function (callback) {
                onPlayListChangeListeners.push(callback);
                playlistChange();
            }
            service.onTimeChange = function (callback) {
                onTimeChangeListeners.push(callback);
            }
            service.onRemove = function (callback) {
                onRemoveListeners.push(callback);
            }
            service.onAdd = function (callback) {
                onAddListeners.push(callback);
            }
            return service;
        }])