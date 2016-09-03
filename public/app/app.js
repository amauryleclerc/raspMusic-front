'use strict';

angular.module('raspMusicApp', ['ui.bootstrap', 'ngResource', 'ngStomp', 'ui.router']);

angular.module('raspMusicApp').constant('_', _);

angular.module('raspMusicApp').config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/playlist");

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
