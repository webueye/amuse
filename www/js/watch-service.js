angular.module('starter.watch-list', [])

.factory('watchList', function($http) {

  return {
    all: function($scope) {
    		var url = "http://fund.kaike.me/fund/watch/list.jsonp?email=rubys@vip.qq.com";
    		$http.jsonp("")
    	
      return "";
    },
    get: function(chatId) {
      
      return null;
    }
  };
});
