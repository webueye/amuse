// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleLightContent();
		}
	});
})

.config(function($stateProvider, $urlRouterProvider) {

	// Ionic uses AngularUI Router which uses the concept of states
	// Learn more here: https://github.com/angular-ui/ui-router
	// Set up the various states which the app can be in.
	// Each state's controller can be found in controllers.js
	$stateProvider

	// setup an abstract state for the tabs directive
		.state('tab', {
		url: "/tab",
		abstract: true,
		templateUrl: "templates/tabs.html"
	})

	// Each tab has its own nav history stack:

	.state('tab.watch', {
		url: '/watch',
		views: {
			'tab-watch': {
				templateUrl: 'templates/tab-watch.html',
				controller: 'WatchCtrl'
			}
		}
	})

	.state('tab.market', {
		url: '/market',
		views: {
			'tab-market': {
				templateUrl: 'templates/tab-market.html',
				controller: 'MarketCtrl'
			}
		}
	})

	.state('tab.my-fund', {
		url: '/my/fund',
		views: {
			'tab-my-fund': {
				templateUrl: 'templates/tab-my-fund.html',
				controller: 'MyFundCtrl'
			}
		}
	})

	.state('tab.summary', {
		url: '/summary',
		views: {
			'tab-summary': {
				templateUrl: 'templates/tab-summary.html',
				controller: 'SummaryCtrl'
			}
		}
	})

	.state('fund', {
		url: '/fund/history/:code',
		cache: false,
		templateUrl: 'templates/fund-history.html',
		controller: 'FundHistoryCtrl'
	})

	.state('tab.chat-detail', {
		url: '/chats/:chatId',
		views: {
			'tab-chats': {
				templateUrl: 'templates/chat-detail.html',
				controller: 'ChatDetailCtrl'
			}
		}
	})

	.state('tab.account', {
		url: '/account',
		views: {
			'tab-account': {
				templateUrl: 'templates/tab-account.html',
				controller: 'AccountCtrl'
			}
		}
	})

	.state('login', {
		url: "/login",
		cache: false,
		templateUrl: "templates/login.html",
		controller: 'LoginCtrl'
	})

	.state('register', {
		url: "/register",
		cache: false,
		templateUrl: "templates/register.html",
		controller: 'RegisterCtrl'
	})

	.state('search', {
		url: "/search",
		cache: false,
		templateUrl: "templates/search.html",
		controller: 'SearchCtrl'
	});

	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/login');

});