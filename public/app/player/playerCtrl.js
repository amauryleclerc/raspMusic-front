'use strict';

app.controller('PlayerCtrl', ['Player', 'PlayerService', '$timeout', function (Player, PlayerService) {
	this.music = null;
	this.state = null;
	this.time = null;
	this.play = function () {
		Player.play();
	}
	this.pause = function () {
		Player.pause();
	}
	this.stop = function () {
		Player.stop();
	}
	this.next = function () {
		Player.next();
	}
	this.previous = function () {
		Player.previous();
	}
	this.changeTime = function () {
		Player.changeTime(this.time.percentage * 10 * this.time.length);
	}

	PlayerService.onPlay((music) => {
		this.music = music;
	});
	PlayerService.onStateChange((state) => {
		this.state = state;
	});
	PlayerService.onMusicChange((music) => {
		this.music = music;
	});
	PlayerService.onTimeChange((time) => {
 		this.time = time;
	});
}]);