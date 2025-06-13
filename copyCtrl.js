angular.module('copyEstudo', []).controller('copyCtrl', function($scope) {
  $scope.usuario = {
    nome: "Lucca",
    idade: 20
  };

  $scope.lista = [];

  $scope.copiar = function() {
    $scope.lista.push(angular.copy($scope.usuario));
    $scope.usuario.nome = "";
  };
});