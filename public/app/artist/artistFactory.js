app.factory('Artist', [ '$resource', function($resource) {
	return $resource('/api/artist', null,  {
		'getMusics' : {
			method : 'GET', url:'http://localhost:8080/api/artist/:artistName/musics', isArray:true
		}
		
	});
} ]);