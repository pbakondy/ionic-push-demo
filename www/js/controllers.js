angular.module('starter.controllers', [])


.controller('DashCtrl', function($scope, $rootScope, $ionicUser, $ionicPush) {
  'use strict';

  // Handles incoming device tokens
  $rootScope.$on('$cordovaPush:tokenReceived', function(event, data) {
    console.log('Got token: ' + data.token + ' ' + data.platform);
    $scope.token = data.token;
  });

  // Identifies a user with the Ionic User service
  $scope.identifyUser = function() {

    // http://docs.ionic.io/v1.0/docs/user-quick-start

    $ionicUser.identify({
      user_id: device.uuid,
//      user_id: $ionicUser.generateGUID(),
//      user_id: '0',
      name: 'Test User',
      message: 'I come from planet Ion'
    });
  };

  // Registers a device for push notifications and stores its token
  $scope.pushRegister = function() {
    console.log('Ionic Push: Registering user');

    // Register with the Ionic Push service.  All parameters are optional.
    $ionicPush.register({
      canShowAlert: true, //Can pushes show an alert on your screen?
      canSetBadge: true, //Can pushes update app icon badges?
      canPlaySound: true, //Can notifications play a sound?
      canRunActionsOnWake: true, //Can run actions outside the app,
      onNotification: function(notification) {
        // Handle new push notifications here
        console.log('Notification:' + JSON.stringify(notification));
      }
    });
  };
});
