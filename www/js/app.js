/* globals window */

// http://docs.ionic.io/v1.0/docs/push-from-scratch

angular.module('starter', [
  'ionic',
  'ngCordova',
  'ionic.service.core',
  'ionic.service.push',
  'starter.controllers'
])

.run(function($ionicPlatform) {
  'use strict';
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      window.StatusBar.styleDefault();
    }
  });
})

.config(['$ionicAppProvider', function($ionicAppProvider) {
  'use strict';
  // http://docs.ionic.io/v1.0/docs/push-android-setup
  // http://docs.ionic.io/v1.0/docs/push-ios-setup

  // Identify app
  $ionicAppProvider.identify({
    // The App ID (from apps.ionic.io) for the server
    app_id: 'YOUR_APP_ID',
    // The public API key all services will use for this app
    api_key: 'YOUR_PUBLIC_API_KEY',
    // Set the app to use development pushes
    dev_push: true,
    // The GCM project number
    gcm_id: 'YOUR_GCM_ID'
  });
}]);
