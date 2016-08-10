angular.module("listaTelefonica").directive("uiAlert", function() {
  return {
    templateUrl: "view/alert.html",
    replace: true,
    restrict: "E",
    scope: {
      //cria um scope isolado sem acesso ao scope externo
      //se o nome da propriedade do scope for igual ao nome da propriedade do scope do template pode ser utilizado o sinal (@, =)
      topic: "@title", // @ vincula valor do atributo diretamente a uma propriedade do scope da diretiva
      //message: "=message" // = cria um vínculo bi-direcional (two-way data-binding) entre a propriedade do scope do template e uma propriedade do scope da diretiva
    },
    transclude: true //habilita escrever o texto dento do elemento (habilitar ng-transclude dentro do template)
  };
});
