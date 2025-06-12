angular.module('appCarros', [])
.controller('carroCtrl', function($scope) {

  $scope.carros = JSON.parse(localStorage.getItem('carros'));
  $scope.carros = [];
  $scope.carro = {};
  $scope.editando = false;
  $scope.indexEditando = -1;

  $scope.salvarCarro = function() {
    if ($scope.carro.cor == null){
      $scope.carro.cor = "Indefinida";
    } 
    if ($scope.editando) {
      $scope.carros[$scope.indexEditando] = angular.copy($scope.carro);
      $scope.editando = false;
      $scope.indexEditando = -1;
    }
    else{
      $scope.carros.push(angular.copy($scope.carro));
    }

    salvarNoStorage();
    $scope.carro = {};
  };

  $scope.editarCarro = function(carro, index) {
    $scope.carro = angular.copy(carro);
    $scope.editando = true;
    $scope.indexEditando = index;
  };

  $scope.cancelarEdicao = function() {
    $scope.carro = {};
    $scope.editando = false;
    $scope.indexEditando = -1;
  };

  function salvarNoStorage() {
  localStorage.setItem('carros', JSON.stringify($scope.carros));
}

  $scope.excluirCarro = function(index) {
    $scope.carros.splice(index, 1);
    salvarNoStorage();
  };
  
});