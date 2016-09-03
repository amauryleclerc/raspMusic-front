"use strict";
angular.module('raspMusicApp').factory('Artist', ['$resource', 'BASE_URL', function ($resource, BASE_URL) {
	return $resource('/api/artist', null, {
		'getMusics': {
			method: 'GET', url: `http://${BASE_URL}/api/artist/:artistName/musics`, isArray: true
		}

	});
}]);