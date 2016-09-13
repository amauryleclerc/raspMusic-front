"use strict";
angular.module('raspMusicApp').controller('PlaylistCtrl', ['Player', 'PlayerService', '$rootScope', function (Player, PlayerService, $rootScope) {
	this.music = null;
	PlayerService.getCurrent((music) => {
		this.music = music;
	})
	var vm = this;
	this.playlist = [];
	this.time = null;
	this.remove = (music) => {
		Player.remove({ id: music.id });
	}

	PlayerService.reloadPlaylist();
	console.log("test");

	this.checkActive = (music) => {
		if (this.music) {
			return music.position === this.music.position;
		}
		return false;
	}
	PlayerService.onPlay((music) => {
		this.music = music;
	});
	PlayerService.onMusicChange((music) => {
		this.music = music;
	});
	PlayerService.onPlayListChange((playlist) => {
		this.playlist = playlist;
	});

	PlayerService.onTimeChange((time) => {
		this.time = time;
		console.log(this.playlist);
	});
}]);