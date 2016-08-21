app.factory('Musics', [ '$resource', function($resource) {
	return $resource('http://localhost:8080/api/musics', null, null);
} ]);