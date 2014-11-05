(function() {
  var app = angular.module('MyAccount', []);

  app.directive('staticHeader',function(){
	  
		return{
			
			restrict: 'A',
			replace: true,
			templateUrl: 'header.html'	
			
		};
	  
  });
  
  app.directive('myAgentsSection',function(){
	  
		return{
			
			restrict: 'E',
			replace: true,
			templateUrl: 'myagents.html'	
			
		};
	  
  });
 
})();