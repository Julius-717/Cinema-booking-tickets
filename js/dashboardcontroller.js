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
		{movieid:"0001",moviename:"Aval"},
		{movieid:"0001",moviename:"Blade Runner"},
		{movieid:"0001",moviename:"Geostorm"},
		{movieid:"0001",moviename:"Golmaal Again"},
		{movieid:"0001",moviename:"ITTEFAQ"},
		{movieid:"0001",moviename:"Mersal"},
		{movieid:"0001",moviename:"PSV Garuda Vega"},
		{movieid:"0001",moviename:"Raja The Great"},
		{movieid:"0001",moviename:"Secret Superstar"},
		{movieid:"0001",moviename:"Solo"},
		{movieid:"0001",moviename:"The Foreigner"},
		{movieid:"0001",moviename:"Thor Ragnarok"},
		{movieid:"0001",moviename:"Villain"}
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