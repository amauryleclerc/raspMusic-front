app
    .service(
				'PlayerService',
				[
        'Player',
        '$timeout',
        '$stomp',
        function (Player, $timeout, $stomp) {

            var onPlayListeners = [];
            var onStateChangeListeners = [];
            var onMusicChangeListeners = [];
            var onTimeChangeListeners = [];
            var onAddListeners = [];
            var onRemoveListeners = [];
            var onPlayListChangeListeners = [];
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
                    $timeout(onPlayListChangeListeners.forEach((listener) => listener(data)));
                });
            }
            Player.getCurrent(play);
            Player.getState(stateChange);


            $stomp.connect('http://localhost:8080/websocket').then(function (frame) {
                var onPlay = $stomp.subscribe('/player/play', function (data, headers, res) {
                    play(data);
                    stateChange({ action: "PLAY" });
                });
                var onPause = $stomp.subscribe('/player/pause', function (data, headers, res) {
                    stateChange({ action: "PAUSE" });
                });
                var onStop = $stomp.subscribe('/player/stop', function (data, headers, res) {
                    stateChange({ action: "STOP" });
                });
                var onChange = $stomp.subscribe('/player/change', function (data, headers, res) {
                    musicChange(data);
                });
                var onAdd = $stomp.subscribe('/player/add', function (data, headers, res) {
                    add(data);
                    playlistChange();
                });
                var onRemove = $stomp.subscribe('/player/remove', function (data, headers, res) {
                    remove(data);
                    playlistChange();
                });
                var onTimeChange = $stomp.subscribe('/player/timechange', function (data, headers, res) {
                    timeChange(data);
                });

            });
            var service = {};
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