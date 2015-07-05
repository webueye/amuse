angular.module('starter.controllers', [])

.controller('WatchCtrl', function($scope, $http) {
	$scope.getWatchList = function() {
		var url = "http://192.168.1.100:8080/fund/watch/list.jsonp?email=rubys@vip.qq.com";
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

.controller('SearchCtrl', function($scope, $http) {
	$scope.fund = "00057";

	$scope.search = function() {
		var url = "http://192.168.1.100:8080/fund/search.jsonp";
		$http.jsonp(url, {
			params: {
				email: "rubys@vip.qq.com",
				fund: $scope.fund,
				callback: "JSON_CALLBACK"
			}
		}).success(function(data) {
			$scope.fundList = data;
		});
	}

	$scope.watch = function(fund) {
		var url = "http://192.168.1.100:8080/fund/watch/" + fund.code + ".jsonp";
		$http.jsonp(url, {
			params: {
				email: "rubys@vip.qq.com",
				callback: "JSON_CALLBACK"
			}
		}).success(function(data) {
			if (data.state) {
				if (fund.watched == "false") {
					fund.watched = "true";
				} else {
					fund.watched = "false";
				}
				//$scope.apply();
			}
		});
	}

	$scope.search();

})

.controller('MarketCtrl', function($scope, $http) {
	var url = "http://192.168.1.100:8080/market/list.jsonp";

	$http.jsonp(url, {
		params: {
			callback: "JSON_CALLBACK"
		}
	}).success(function(data) {
		$scope.marketList = data;
	});
})

.controller('MyFundCtrl', function($scope, $http) {

	$scope.getHoldList = function() {
		var url = "http://192.168.1.100:8080/fund//hold/list.jsonp?email=rubys@vip.qq.com";
		$http.jsonp(url, {
			params: {
				callback: "JSON_CALLBACK"
			}
		}).success(function(data) {
			$scope.holdSummary = data;
			$scope.holdList = data.summaryItems;
		}).finally(function() {
			$scope.$broadcast('scroll.refreshComplete');
		});
	}

	$scope.getHoldList();

	$scope.doRefreshHoldist = function() {
		$scope.getHoldList();
	}

})

.controller('FundHistoryCtrl', function($scope, $stateParams, $http) {
	var url = "http://192.168.1.100:8080/fund/" + $stateParams.code + ".jsonp";

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

.controller('SummaryCtrl', function($scope, $http) {
	$scope.getHoldList = function() {
		var url = "http://192.168.1.100:8080/fund/summary.jsonp?email=rubys@vip.qq.com";
		$http.jsonp(url, {
			params: {
				callback: "JSON_CALLBACK"
			}
		}).success(function(data) {
			$scope.summary = data;
		}).finally(function() {
			$scope.$broadcast('scroll.refreshComplete');
		});
	}

	$scope.getHoldList();

	$scope.doRefreshHoldist = function() {
		$scope.getHoldList();
	}
})

.controller('LoginCtrl', function($scope, $http, $state) {
	$scope.user = {
		email: "rubys@vip.qq.com",
		password: "admin"
	};

	$scope.login = function(user) {
		var config = {
			params: {
				callback: "JSON_CALLBACK",
				email: user.email,
				password: user.password
			},
			withCredentials: true
		};

		$http.jsonp("http://192.168.1.100:8080/account/login.jsonp", config).success(function(data) {
			if (data.state) {
				$state.go("tab.watch");
			}
		}).error(function(status, error) {
			alert(status + "," + error)
		});
	};

	$scope.register = function(user) {
		$state.go("register");
	}

})


.controller('RegisterCtrl', function($scope, $http, $state) {
	$scope.user = {
		email: "rubys@vip.qq.com",
		password: "admin"
	};

	$scope.register = function(user) {
		var config = {
			params: {
				callback: "JSON_CALLBACK",
				email: user.email,
				password: user.password
			},
			withCredentials: true
		};

		$http.jsonp("http://192.168.1.100:8080/account/register.jsonp", config).success(function(data) {
			if (data.state) {
				$state.go("tab.watch");
			}
		}).error(function(status, error) {
			alert(status + "," + error)
		});
	};

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