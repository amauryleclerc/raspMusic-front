app.factory('Player', [ '$resource', function($resource) {
	return $resource(null, null, {
		'play' : {
			method : 'POST', url:'http://leclerc.hd.free.fr:80/api/player/play'
		},
		'pause' : {
			method : 'POST', url:'http://leclerc.hd.free.fr:80/api/player/pause'
		},
		'stop' : {
			method : 'POST', url:'http://leclerc.hd.free.fr:80/api/player/stop'
		},
		'add' : {
			method : 'PUT', url:'http://leclerc.hd.free.fr:80/api/player/playlist/add'
		},
		'remove' : {
			method : 'PUT', url:'http://leclerc.hd.free.fr:80/api/player/playlist/remove'
		},
		'next' : {
			method : 'POST', url:'http://leclerc.hd.free.fr:80/api/player/next'
		},
		'previous' : {
			method : 'POST', url:'http://leclerc.hd.free.fr:80/api/player/previous'
		},
		'getCurrent' : {
			method : 'GET', url:'http://leclerc.hd.free.fr:80/api/player/playlist/current'
		},
		'getState' : {
			method : 'GET', url:'http://leclerc.hd.free.fr:80/api/player/state'
		},
		'getPlaylist' : {
			method : 'GET', url:'http://leclerc.hd.free.fr:80/api/player/playlist' , isArray:true
		},
		'changeTime' : {
			method : 'POST', url:'http://leclerc.hd.free.fr:80/api/player/changeTime' 
		},
		
	});
} ]);