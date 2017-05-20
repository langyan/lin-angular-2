'use strict';

import angular from 'angular';
import ngRoute from 'angular-route';

export default angular.module('myApp.view2', [ngRoute])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {

}]);