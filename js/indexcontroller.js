var app=angular.module("myApp",["ngRoute"]);
app.config(function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl: "frontpage.html"
	})
	.when("/showtime",{
		templateUrl: "showtime.html"
	})
	.when("/movielist",{
		templateUrl: "movies.html"
	})
	.when("/movielist/:movieId",{
		templateUrl: "movieHomePage.html"
	})
	.when("/cinemas",{
		templateUrl: "multiplex.html"
	})
	.when("/login",{
		templateUrl: "login.html"
	})
	.when("/seats",{
		templateUrl: "seats.html"
	})
    .when("/aboutus",{
		templateUrl: "aboutus.html"
	})
    .when("/faq",{
		templateUrl: "faq.html"
	})
    .when("/contactus",{
		templateUrl: "contactus.html"
	})
    .when("/terms",{
		templateUrl: "terms_condition.html"
	})
    .when("/ourvision",{
		templateUrl: "ourvision.html"
	})
    .when("/food",{
		templateUrl: "food.html"
	})
    .when("/ticket",{
		templateUrl: "ticket.html"
	})
    
});

