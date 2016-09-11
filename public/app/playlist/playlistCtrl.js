"use strict";
angular.module('raspMusicApp').controller('PlaylistCtrl', ['Player', 'PlayerService', function (Player, PlayerService) {
	this.music = null;
	 PlayerService.getCurrent((music) =>{
		 this.music = music;
	 })

	this.playlist = [];
	this.time = null;
	this.remove = (music) =>{
		Player.remove({id:music.id});
	}
	this.checkActive =  (music) =>{
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
	});
}]);