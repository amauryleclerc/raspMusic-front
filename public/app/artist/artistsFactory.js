app.factory('Artists', [ '$resource', function($resource) {
	return $resource('http://leclerc.hd.free.fr:80/api/artists', null, null);
} ]);