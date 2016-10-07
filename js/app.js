angular.module('mainApp', ['dndLists', 'ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'templates/prepare.html',
        controller: 'firstController as first'
      });
    $stateProvider
      .state('result', {
        url: '/result',
        templateUrl: 'templates/result.html',
        controller: 'secondCtrl as second'
      })


  })
