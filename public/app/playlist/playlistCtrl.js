"use strict";
angular.module('raspMusicApp').controller('PlaylistCtrl', ['Player', 'PlayerService', function (Player, PlayerService) {
	this.music = null;
	 PlayerService.getCurrent((music) =>{
		 this.music = music;
	 })

	this.playlist = [];
	this.time = null;
	this.remove = (music) =>{
		Player.remove(music);
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
	/*PlayerService.onRemove((music)=>{
		this.playlist = this.playlist.filter((music)=> music.position !== this.music.position);
	});*/
	PlayerService.onTimeChange((time) => {
		this.time = time;
	});
}]);