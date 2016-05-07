
'use strict';
app.directive('playerItem', function() {
return {
restrict : 'EA',
controller : 'PlayerCtrl',
controllerAs : 'playerCtrl',
templateUrl : 'app/player/player.html'
};
});