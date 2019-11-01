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
    $scope.movies= ["Titanic", "Sonic", "Maleficent","Joker","Hellboy","Darkphoenix","Endgame","Aladdin","Charlie`s angels","Birds of prey","Gemini man","Hobbs & Shaw","Angel has fallen"];
    $scope.languageslist= ["English",];
    $scope.cinemas= ["20th century Cinemas", "Anga Diamond Cinemas", "Anga Sky Cinemas", "Garden City Cinemas", "Junction Mall Cinemas", "Prestige Plaza Cinemas"];
    $scope.showtimes= ["Noon", "Matinee", "Evening", "Night"];

    $scope.movieslist= [
      	{moviename: "Joker", movielanguage: "English", cinemas:"Anga Sky Cinemas", showtime:["5.30pm","3.30pm","10.10pm"], duration:"180mins"}, 
		{moviename: "Sonic", movielanguage: "English", cinemas:"Anga Diamond Cinemas", showtime:["10.30pm","6.30pm"], duration:"150mins"},
		{moviename: "Maleficent", movielanguage: "English",cinemas:"20th Century Cinemas", showtime:["12.30pm","3.30pm"], duration:"120mins"},
		{moviename: "Hellboy", movielanguage: "English",cinemas:"20th Century Cinemas", showtime:["2.30pm","3.30pm","12.30pm"], duration:"190mins"},
		{moviename: "Darkphoenix", movielanguage: "English", cinemas:"Garden City Cinemas", showtime:["12.30pm","3.30pm","10.30pm"], duration:"120mins"},
		{moviename: "Endgame", movielanguage: "English", cinemas:"Prestige Plaza Cinemas", showtime:["12.30pm","3.30pm"], duration:"120mins"},
		{moviename: "AAladdin", movielanguage: "English", cinemas:"Junction Mall Cinemas", showtime:["12.30pm","3.30pm","10.30pm"], duration:"120mins"},
		{moviename: "Angel has falle", movielanguage: "English", cinemas:"Anga Sky Cinemas", showtime:["12.30pm","3.30pm"], duration:"120mins"}
	];

    $scope.showDetails = function (record) {
      $scope.recordDetails = record;
    };
});