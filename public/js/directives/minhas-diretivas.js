angular.module('minhasDiretivas', [])
	.directive('meuPainel', function() {
		var ddo = {};

		ddo.restrict = "AE";
		ddo.transclude = true;

		ddo.scope = {
			titulo : '@'
		};

		ddo.templateUrl = 'js/directives/meu-painel.html';

		return ddo;
	})
	.directive('minhaFoto', function() {
		var ddo = {};

		ddo.restrict = "AE";

		ddo.scope = {
			url : '@url',
			titulo : '@titulo'
		};

		ddo.templateUrl = 'js/directives/minha-foto.html';

		return ddo;
	})
	.directive('meuBotaoPerigo', function() {
		var ddo = {};

		ddo.restrict = "E";

		ddo.scope = {
			nome : '@',
			acao : '&'
		};

		ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao(foto)">{{nome}}</button>';

		return ddo;
	});