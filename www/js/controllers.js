angular.module('starter.controllers', [])

.controller('WatchCtrl', function($scope, $http) {
	$scope.getWatchList = function() {
		var url = "http://192.168.1.101:8080/fund/watch/list.jsonp?email=rubys@vip.qq.com";
		$http.jsonp(url, {
			params: {
				callback: "JSON_CALLBACK"
			}
		}).success(function(data) {
			$scope.watchList = data;
		}).finally(function() {
			$scope.$broadcast('scroll.refreshComplete');
		});
	}

	$scope.getWatchList();

	$scope.doRefreshWatchList = function() {
		$scope.getWatchList();
	}
})

.controller('MarketCtrl', function($scope, $http) {
	var url = "http://192.168.1.101:8080/market/list.jsonp";

	$http.jsonp(url, {
		params: {
			callback: "JSON_CALLBACK"
		}
	}).success(function(data) {
		$scope.marketList = data;
	});
})

.controller('MyFundCtrl', function($scope) {})

.controller('FundHistoryCtrl', function($scope, $stateParams, $http) {
	var url = "http://192.168.1.101:8080/fund/" + $stateParams.code + ".jsonp";
	
	$scope.fund = {};
	$http.jsonp(url, {
		params: {
			callback: "JSON_CALLBACK"
		}
	}).success(function(data) {
		$scope.fund.code = data["code"];
		$scope.fund.name = data["name"];
		$scope.fund.histories = data["fundHistories"];
	});
})

.controller('SummaryCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
	// With the new view caching in Ionic, Controllers are only called
	// when they are recreated or on app start, instead of every page change.
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:
	//
	//$scope.$on('$ionicView.enter', function(e) {
	//});

	$scope.chats = Chats.all();
	$scope.remove = function(chat) {
		Chats.remove(chat);
	}
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
	$scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
	$scope.settings = {
		enableFriends: true
	};
})

.filter("showColor", function() {
	return function(input) {
		if (input > 0) {
			return "firebrick";
		} else if (input < 0) {
			return "forestgreen";
		}
		return "gray";
	}
})

;