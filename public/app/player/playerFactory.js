"use strict";
angular.module('raspMusicApp').factory('Player', [ '$resource', 'BASE_URL', function($resource, BASE_URL) {
	return $resource(null, null, {
		'play' : {
			method : 'POST', url:`http://${BASE_URL}/api/player/play`
		},
		'pause' : {
			method : 'POST', url:`http://${BASE_URL}/api/player/pause`
		},
		'stop' : {
			method : 'POST', url:`http://${BASE_URL}/api/player/stop`
		},
		'add' : {
			method : 'PUT', url:`http://${BASE_URL}/api/player/add`
		},
		'remove' : {
			method : 'PUT', url:`http://${BASE_URL}/api/player/remove`
		},
		'next' : {
			method : 'POST', url:`http://${BASE_URL}/api/player/next`
		},
		'previous' : {
			method : 'POST', url:`http://${BASE_URL}/api/player/previous`
		},
		'getCurrent' : {
			method : 'GET', url:`http://${BASE_URL}/api/player/current`
		},
		'getState' : {
			method : 'GET', url:`http://${BASE_URL}/api/player/state`
		},
		'getPlaylist' : {
			method : 'GET', url:`http://${BASE_URL}/api/player/playlist` , isArray:true
		},
		'changeTime' : {
			method : 'POST', url:`http://${BASE_URL}/api/player/changeTime` 
		},
		
	});
} ]);