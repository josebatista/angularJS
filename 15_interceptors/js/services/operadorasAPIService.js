angular.module("listaTelefonica").service("operadorasAPI", function(config, $http) {
  this.getOperadoras = function() {
    return $http.get(config.baseUrl + "/operadoras");
  };
});
