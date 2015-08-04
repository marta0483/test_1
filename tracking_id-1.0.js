angular.module('trackingIdService', [
	'ngResource',
	'configuration'
])

.service('trackingIdService', ['$q', '$http','$log', 'url', function ($q, $http,$log, url) {
	this.getTrackingId = function() {
		var deferred = $q.defer();
		$http.get(url.trackingId).
		success(function(data){
			deferred.resolve(data);
		})
		.error(function(err) {
			deferred.reject(err);
                        $log.error(err);
		});
		return deferred.promise;
	};
}]);