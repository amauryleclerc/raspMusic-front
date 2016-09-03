"use strict";
angular.module('raspMusicApp').factory('Artists', ['$resource', 'BASE_URL', function ($resource, BASE_URL) {
	return $resource(`http://${BASE_URL}/api/artists`, null, null);
}]);