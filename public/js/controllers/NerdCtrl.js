angular.module('NerdCtrl', []).controller('NerdController', function ($scope, Nerd) {

    Nerd.getJenkinsMasterNode().then(function (jenkinsMasterNode) {
      $scope.jenkinsMasterNode = jenkinsMasterNode;
    })
});