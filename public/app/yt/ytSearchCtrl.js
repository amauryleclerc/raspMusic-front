"use strict";
angular.module('raspMusicApp').controller('YtSearchCtrl', ['$scope', 'Yt', 'Player', function ($scope, Yt, Player) {
	this.query = "";
	this.videos = [];
	var that = this;
	this.search = function () {
		console.log("search");
		//gapi.login().then(callbackCreator(this.query, this.videos));
		var search = {
			part: 'snippet',
			q: that.query,
			key: "AIzaSyBuOzo_bwsr4JP0U993vNhJ9mKH6dfH9Ks",
			//videoEmbeddable:"true",
			type:"video",
		//	videoSyndicated:"true",
			videoLicense:"creativeCommon"
		
		}
		Yt.search(search, function (data) {
			that.videos = data.items.filter(function (video) {
				return video.id.kind == "youtube#video";
			});
		//	console.log(that.videos);
		});
	}
	this.add = function (video) {
		console.log("add");
		var music = { id: video.id.videoId, title: video.snippet.title, album: { name: video.snippet.channelTitle }, artist: { name: '' } };
		Player.add(music);
	}

}]);
