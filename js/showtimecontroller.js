app.controller("showtimecontroller",function($scope){
	$scope.val=[];
	$scope.today = new Date();
	$scope.startDate = new Date();
  	$scope.seconddate = $scope.startDate.setDate($scope.startDate.getDate() + 1);
  	$scope.thirddate = $scope.startDate.setDate($scope.startDate.getDate() + 1);
  	$scope.fourthdate = $scope.startDate.setDate($scope.startDate.getDate() + 1);
  	$scope.fifthdate = $scope.startDate.setDate($scope.startDate.getDate() + 1);

    $scope.filterObject = { moviename : "", movielanguage :"", cinemas : "", showtime :""};    
    $scope.recordDetails= undefined;
    $scope.movies= ["Aval", "Blade Runner", "Geostorm","Golmaal Again","ITTEFAQ","Mersal","PSV Garuda Vega","Raja The Great","Secret Superstar","Solo","The Foreigner","Thor: Ragnarok","Villain"];
    $scope.languageslist= ["English", "Hindi","Kannada","Malayalam","Tamil", "Telugu"];
    $scope.cinemas= ["Palazzo Cinemas", "Escape Cinemas", "PVR Cinemas", "Kamala Cinemas", "Sathyam Cinemas", "Luxe Cinemas"];
    $scope.showtimes= ["Noon", "Matinee", "Evening", "Night"];

    $scope.movieslist= [
      	{moviename: "Aval", movielanguage: "Tamil", cinemas:"Sathyam Cinemas", showtime:["5.30pm","3.30pm","10.10pm"], duration:"180mins"}, 
		{moviename: "Mersal", movielanguage: "Tamil", cinemas:"Escape Cinemas", showtime:["10.30pm","6.30pm"], duration:"Tamil 150mins"},
		{moviename: "Blade Runner", movielanguage: "English",cinemas:"Luxe Cinemas", showtime:["12.30pm","3.30pm"], duration:"120mins"},
		{moviename: "Villain", movielanguage: "Malayalam",cinemas:"Luxe Cinemas", showtime:["2.30pm","3.30pm","12.30pm"], duration:"190mins"},
		{moviename: "PSV Garuda Vega", movielanguage: "Telugu", cinemas:"Kamala Cinemas", showtime:["12.30pm","3.30pm","10.30pm"], duration:"120mins"},
		{moviename: "Raja The Great", movielanguage: "Telugu", cinemas:"SATHYAM", showtime:["12.30pm","3.30pm"], duration:"120mins"},
		{moviename: "Thor: Ragnarok", movielanguage: "English", cinemas:"PVR Cinemas", showtime:["12.30pm","3.30pm","10.30pm"], duration:"120mins"},
		{moviename: "Secret Superstar", movielanguage: "Hindi", cinemas:"Palazzo Cinemas", showtime:["12.30pm","3.30pm"], duration:"120mins"}
	];

    $scope.showDetails = function (record) {
      $scope.recordDetails = record;
    };
});