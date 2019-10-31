var apps = angular.module('adminApp',[]).controller('dashboardctrl', function($scope) {

	$scope.totalsales=1560000;
	$scope.totaloccupancy=5986;
	$scope.salesdetails=[
		{multiplex:"20TH CENTURY",screens:"SCREEN1", movies:"JOKER", sales:20000, occupancy:200},
		{multiplex:"20TH CENTURY",screens:"SCREEN2", movies:"HOBBS & SHAW", sales:12000, occupancy:160},
		{multiplex:"20TH CENTURY",screens:"SCREEN3", movies:"ANGEL HAS FALLEN", sales:18000, occupancy:220},
		{multiplex:"ANGA DIAMOND",screens:"SCREEN1", movies:"JOKER", sales:10000, occupancy:180},
		{multiplex:"ANGA DIAMOND",screens:"SCREEN2", movies:"HOBBS & SHAW", sales:10000, occupancy:170},
		{multiplex:"ANGA DIAMOND",screens:"SCREEN3", movies:"ANGEL HAS FALLEN", sales:10000, occupancy:200},
		{multiplex:"ANGA SKY",screens:"SCREEN1", movies:"JOKER", sales:8000, occupancy:200},
		{multiplex:"ANGA SKY",screens:"SCREEN2", movies:"HOBBS & SHAW", sales:8000, occupancy:200},	
		{multiplex:"ANGA SKY",screens:"SCREEN3", movies:"ANGEL HAS FALLEN", sales:8000, occupancy:200},
	];

	$scope.movies=[
		{movieid:"0001",moviename:"Titanic"},
		{movieid:"0001",moviename:"Sonic"},
		{movieid:"0001",moviename:"Maleficent"},
		{movieid:"0001",moviename:"Joker"},
		{movieid:"0001",moviename:"Hellboy"},
		{movieid:"0001",moviename:"Dark phoenix"},
		{movieid:"0001",moviename:"Endgame"},
		{movieid:"0001",moviename:"Aladdin"},
		{movieid:"0001",moviename:"Charlie`s angels"},
		{movieid:"0001",moviename:"Birds of prey"},
		{movieid:"0001",moviename:"Gemini man"},
		{movieid:"0001",moviename:"Hobbs & Shaw"},
		{movieid:"0001",moviename:"Angel has fallen"}
	];

	$scope.multiplexs=[
		{multiplexname:'Palazzo Cinemas'},
		{multiplexname:'Escape Cinemas'}, 
		{multiplexname:'PVR Cinemas'}, 
		{multiplexname:'Kamala Cinemas'},
		{multiplexname:'Sathyam Cinemas'},
		{multiplexname:'Luxe Cinemas'}
	];
});