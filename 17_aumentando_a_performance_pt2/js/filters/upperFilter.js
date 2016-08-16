angular.module("listaTelefonica").filter("upper", function() {
  return function(input) {
    return input.toUpperCase();
  };
});
