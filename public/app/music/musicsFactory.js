app.factory('Musics', [ '$resource', function($resource) {
	return $resource('http://leclerc.hd.free.fr:80/api/musics', null, null);
} ]);