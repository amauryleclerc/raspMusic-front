"use strict";
angular.module('raspMusicApp').factory('Musics', ['$resource', 'BASE_URL', function ($resource, BASE_URL) {
	return $resource(`http://${BASE_URL}/api/musics`, null, null);
}]);