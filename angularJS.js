var app = angular.module('myapp', ['ui.bootstrap', 'nvd3', 'ngStorage']);

// 如何讓ng-include裡面的html的srcipt的controller能執行
app.config(function($controllerProvider, $provide) {

	// Provider-based controller.
	// 第三方服務是由一些物件組成，這些物件用來建立和配置AngularJs檔案的例項。
	// 因此，我們用$controllerProvider服務來進行controller的延遲註冊。
	// 以此類推，$compileProvider服務用來延遲註冊directive，
	// $filterProvider服務用來延遲註冊filter，
	// $provider服務用來延遲註冊service。
	app.controller = function(name, constructor) {
		$controllerProvider.register(name, constructor);
		return (this);
	};
	// Provider-based service.
	app.service = function(name, constructor) {
		$provide.service(name, constructor);
		return (this);
	};

	// Provider-based factory.
	app.factory = function(name, factory) {
		$provide.factory(name, factory);
		return (this);
	};
});

app.directive("test1", function() {
	return {
		restrict: "E",
		template: "<h3>test directive</h3>"
	};
});

app.component("helloWorld", {
	template: '<h3>test component</h3>'
});

app.service('myService', function() {
	console.log('instance myService');
	var privateValue = "I am Private";
	this.variable = "This is public";
	this.getPrivate = function() {
		return privateValue;
	};
});

app.factory('myFactory', function() {
	console.log('instance myFactory');
	var factory = {};
	factory.word = '我要成為海賊王!';
	return factory;
});


app.controller('angularPractice', function($scope, $log, $http, $rootScope, $localStorage, $sessionStorage) {

	$scope.init = function() {
		$scope.defaultUrl = 'http://localhost:8080/angularJS';
		$scope.inputVO = {
			'memberVO': ''
		}
		$scope.inputVO.memberVO = {
			'id': '',
			'email': '',
			'cellphone': '',
			'password': '',
			'address': ''
		}
	};
	$scope.init();

	$scope.query = function() {
		if (!$scope.inputVO.memberVO.email) {
			alert("請輸入信箱!");
			return;
		}
		$scope.post('/query');
	}

	$scope.create = function() {
		if (!$scope.inputVO.memberVO.email) {
			alert("請輸入信箱!");
			return;
		}
		if (!$scope.inputVO.memberVO.password) {
			alert("請輸入密碼!");
			return;
		}
		$scope.post('/create');
	}

	$scope.update = function() {
		if (!$scope.inputVO.memberVO.email) {
			alert("請輸入信箱!");
			return;
		}
		if (!$scope.inputVO.memberVO.password) {
			alert("請輸入密碼!");
			return;
		}
		$scope.post('/update');
	}

	$scope.delete = function() {
		if (!$scope.inputVO.memberVO.email) {
			alert("請輸入信箱!");
			return;
		}
		$scope.post('/delete');
	}

	$scope.post = function(method) {
		$http({
			method: 'POST',
			url: $scope.defaultUrl + method,
			data: $scope.inputVO,
			headers: {
				'Content-type': 'application/json;charset=UTF-8'
			}
		}).then(function successCallback(response) {
			if (method == '/query') {
				$scope.searchedMember = response.data.memberVO;
			}
			if (response.data.result) {
				alert(response.data.result);
			}
		}, function errorCallback(response) {
		});
	}


});