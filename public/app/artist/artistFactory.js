app.factory('Artist', [ '$resource', function($resource) {
	return $resource('/api/artist', null,  {
		'getMusics' : {
			method : 'GET', url:'http://leclerc.hd.free.fr:80/api/artist/:artistName/musics', isArray:true
		}
		
	});
} ]);