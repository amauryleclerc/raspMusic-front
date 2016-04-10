'use strict';

var app = angular.module('raspMusicApp', [ 'ui.bootstrap', 'ngResource',  'ngStomp', 'ui.router' ]);
app.constant('_', _);


app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/playlist");
  //
  // Now set up the states
  $stateProvider
    .state('playlist', {
      url: "/playlist",
      templateUrl: "app/playlist/playlist.html",
      controller: 'PlaylistCtrl',
      controllerAs: 'playlistCtrl'
    })
      .state('musics', {
      url: "/musics",
      templateUrl: "app/music/musics.html",
      controller: 'MusicsCtrl',
      controllerAs: 'musicsCtrl'
    })
       .state('artists', {
      url: "/artists",
      templateUrl: "app/artist/artists.html",
      controller: 'ArtistsCtrl',
      controllerAs: 'artistsCtrl'
    })
      .state('artist', {
      url: "/artist/:artistName",
      templateUrl: "app/artist/artist.html",
      controller: 'ArtistCtrl',
      controllerAs: 'artistCtrl'
    })
      .state('yt', {
      url: "/yt",
      templateUrl: "app/yt/yt-search.html",
      controller: 'YtSearchCtrl',
      controllerAs: 'ytSearchCtrl'
    })

});
/*
app.value('GoogleApp', {
  apiKey: 'AIzaSyCCDMOrj_WURNcInIneJuy0oTI_pqtoNhE',
  clientId: '541781515171.apps.googleusercontent.com',
  scopes: [
    'https://www.googleapis.com/auth/youtube'
  ]
})
*/
/*
app.config(['gapiProvider', function(gapiProvider) {
    gapiProvider.apiKey('AIzaSyB2xUhofT1xuA_eod2v4ap58X5mOtFtNHg') // api for app (you can create them in dev console)
        .clientId('786976564501-i1dgcl989k9qug6brteok2drjl23msud.apps.googleusercontent.com'); // you can obtain them in gogle dev console
       // scopes is space delimited string
}]);*/
/*app.run(['GApi', 'GAuth',
         function(GApi, GAuth) {
             var BASE = 'https://myGoogleAppEngine.appspot.com/_ah/api';
             GApi.load('myApiName','v1',BASE).then(function(resp) {
                 console.log('api: ' + resp.api + ', version: ' + resp.version + ' loaded');
             }, function(resp) {
                 console.log('an error occured during loading api: ' + resp.api + ', resp.version: ' + version);
             });
         }
     ]);
*/

//angular.module('ngm.NgGapi')
//.provider('OauthService', NgGapi.Config)
//.config(function (OauthServiceProvider) {
//    OauthServiceProvider.setScopes('https://www.googleapis.com/auth/drive.file');
//    OauthServiceProvider.setClientID('786976564501-i1dgcl989k9qug6brteok2drjl23msud.apps.googleusercontent.com');
//    OauthServiceProvider.setTokenRefreshPolicy(NgGapi.TokenRefreshPolicy.ON_DEMAND);
//    OauthServiceProvider.setNoAccessTokenPolicy(999);                 // 0 = fail, > 0 = retry after x
//});
//app
//		.value(
//				'GoogleApp',
//				{
//					apiKey : 'AIzaSyB2xUhofT1xuA_eod2v4ap58X5mOtFtNHg',
//					clientId : '786976564501-i1dgcl989k9qug6brteok2drjl23msud.apps.googleusercontent.com',
//					scopes : [ 'https://www.googleapis.com/auth/drive',
//							'https://www.googleapis.com/auth/youtube',
//							'https://www.googleapis.com/auth/userinfo.profile' ]
//				});

// 9ZQMZ_6ZQLCYCd1WHmokebCr
