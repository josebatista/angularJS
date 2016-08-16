angular.module("listaTelefonica").factory("contatosAPI", function(config, $http){
  var _getContatos = function() {
    return $http.get(config.baseUrl + "/contatos");
  };

  var _getContato = function(id) {
    return $http.get(config.baseUrl + "/contatos/" + id);
  };

  var _saveContato = function(contato) {
    return $http.post(config.baseUrl + "/contatos", contato);
  };

  return {
    getContatos: _getContatos,
    getContato: _getContato,
    saveContato: _saveContato
  };
});
