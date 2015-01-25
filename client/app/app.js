'use strict';

angular.module('espressoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.sortable',
  'ui.bootstrap',
  'ui.bootstrap.modal',
  'LocalStorageModule',
  'espressoApp.services',
  'espressoApp.directives'
])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }])
  .config(function(AWSServiceProvider) {
    AWSServiceProvider
      .setArn(
        'arn:aws:iam::647056934977:role/google-web-role');
  })
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });


  window.onLoadCallback = function() {
    // When the document is ready
    angular.element(document).ready(function() {
      // Bootstrap the oauth2 library
      gapi.client.load('oauth2', 'v2', function() {
        // Finally, bootstrap our angular app
        angular.bootstrap(document, ['espressoApp']);
      });
    });
  };
