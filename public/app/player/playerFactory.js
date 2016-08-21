app.factory('Player', [ '$resource', function($resource) {
	return $resource(null, null, {
		'play' : {
			method : 'POST', url:'http://localhost:8080/api/player/play'
		},
		'pause' : {
			method : 'POST', url:'http://localhost:8080/api/player/pause'
		},
		'stop' : {
			method : 'POST', url:'http://localhost:8080/api/player/stop'
		},
		'add' : {
			method : 'PUT', url:'http://localhost:8080/api/player/add'
		},
		'remove' : {
			method : 'PUT', url:'http://localhost:8080/api/player/remove'
		},
		'next' : {
			method : 'POST', url:'http://localhost:8080/api/player/next'
		},
		'previous' : {
			method : 'POST', url:'http://localhost:8080/api/player/previous'
		},
		'getCurrent' : {
			method : 'GET', url:'http://localhost:8080/api/player/current'
		},
		'getState' : {
			method : 'GET', url:'http://localhost:8080/api/player/state'
		},
		'getPlaylist' : {
			method : 'GET', url:'http://localhost:8080/api/player/playlist' , isArray:true
		},
		'changeTime' : {
			method : 'POST', url:'http://localhost:8080/api/player/changeTime' 
		},
		
	});
} ]);