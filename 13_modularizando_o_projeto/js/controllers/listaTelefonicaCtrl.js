angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, $filter, contatosAPI, operadorasAPI, serialGenerator) {
  $scope.app = "Lista Telefonica";
  $scope.contatos = [];
  $scope.operadoras = [];

  var carregarContatos = function() {
    contatosAPI.getContatos().success(function(data) {
      $scope.contatos = data;
    });
  };

  var carregarOperadoras = function() {
    operadorasAPI.getOperadoras().success(function(data) {
      $scope.operadoras = data;
    }).error(function(data){
      $scope.message = "Não foi possível carregar os dados";
    });
  };

  $scope.adicionarContato = function(contato) {
    contato.serial = serialGenerator.generate();
    contato.data = new Date();
    contatosAPI.saveContato(contato).success(function(data) {
      delete $scope.contato;
      $scope.contatoForm.$setPristine();
      carregarContatos();
    }).error(function(data){
      $scope.message = "Não foi possível adicionar um contato";
    });

  };
  $scope.apagarContatos = function(contatos) {
    $scope.contatos = contatos.filter(function(contato) {
      if(!contato.selecionado) return contato;
    });
  };
  $scope.isContatoSelecionado = function(contatos) {
    return contatos.some(function(contato) {
      return contato.selecionado;
    });
  };
  $scope.ordenarPor = function(campo){
    $scope.criterioDeOrdenacao = campo;
    $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
  }

  carregarContatos();
  carregarOperadoras();

});
