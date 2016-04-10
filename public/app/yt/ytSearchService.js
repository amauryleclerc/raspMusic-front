app.factory('Yt', [ '$resource', function($resource) {
	return $resource(null, null,  {
		'search' : {
			method : 'GET', url:'https://www.googleapis.com/youtube/v3/search',
		}
		
	});
} ]);