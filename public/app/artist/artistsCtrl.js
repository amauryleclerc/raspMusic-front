"use strict";
angular.module('raspMusicApp').controller('ArtistsCtrl', ['Artists', function (Artists) {
	this.artists = Artists.query();




}]);