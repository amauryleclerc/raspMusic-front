app.factory('Artists', [ '$resource', function($resource) {
	return $resource('http://localhost:8080/api/artists', null, null);
} ]);