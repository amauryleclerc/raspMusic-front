app
    .service(
				'PlayerService',
				[
        'Player',
        '$timeout',
        '$stomp',
        function(Player, $timeout, $stomp) {

            var _onReceiveData = _.noop;
            $stomp.connect('http://leclerc.hd.free.fr:80/websocket').then(function(frame) {
                var onPlay = $stomp.subscribe('/player/play', function(data, headers, res) {
                    _.assign(Service.currentMusic, data);
                    Service.state.action = "PLAY";
                });
                var onPause = $stomp.subscribe('/player/pause', function(data, headers, res) {
                    _.assign(Service.state, data);
                    Service.state.action = "PAUSE";
                });
                var onStop = $stomp.subscribe('/player/stop', function(data, headers, res) {
                    Service.state.action = "STOP";
                });
                var onChange = $stomp.subscribe('/player/change', function(data, headers, res) {
                    _.assign(Service.currentMusic, data);
                });
                var onAdd = $stomp.subscribe('/player/add', function(data, headers, res) {
                    if (typeof Service.currentMusic.title == "undefined") {
                        _.assign(Service.currentMusic, data);
                    }
                    Service.playlist.push(data);
                });
                var onRemove = $stomp.subscribe('/player/remove', function(data, headers, res) {
                    for (var num in Service.playlist) {
                        if (Service.playlist[num].position === data.position) {
                            Service.playlist.splice(num, 1);
                        }
                    }
                });
                var onTimeChange = $stomp.subscribe('/player/timechange', function(data, headers, res) {
                    _.assign(Service.currentMusic.currentTime, data.currentTime);
                    _.assign(Service.currentMusic.percentage, (data.currentTime / Service.currentMusic.length) / 10);

                });

            });

            var Service = {};
            Service.currentMusic = Player.getCurrent();
            Service.playlist = Player.getPlaylist();
            Service.state = Player.getState();
            return Service;
        }])