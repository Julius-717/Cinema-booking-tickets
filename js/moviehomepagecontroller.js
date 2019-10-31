var apps= angular.module('myApp').controller('movieHomeCTRL',function($scope){

    $scope.today = new Date();
    $scope.startDate = new Date();
    $scope.seconddate = $scope.startDate.setDate($scope.startDate.getDate() + 1);
    $scope.thirddate = $scope.startDate.setDate($scope.startDate.getDate() + 1);
    $scope.fourthdate = $scope.startDate.setDate($scope.startDate.getDate() + 1);
    $scope.fifthdate = $scope.startDate.setDate($scope.startDate.getDate() + 1);

    $scope.filterObject = { cinemas : "", showtime : "" };    
    $scope.recordDetails= undefined;
    $scope.cinemas= ["20th century Cinemas", "Anga Diamond Cinemas", "Anga Sky Cinemas", "Garden City Cinemas", "Junction Mall Cinemas", "Prestige Plaza Cinemas"];
    $scope.showtimes= ["Noon", "Matinee", "Evening", "Night"];
    
    $scope.movieDetails = 
        {
            movieId: 001,
            moviename: 'Joker',
            moviesynopsis: 'In Gotham City, mentally-troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: "The Joker".',
            movielanguage: 'English',
            movierating: 'A',
            moviegenre: 'Crime, Drama, Thriller',
            moviecrew: 'Todd Phillips, Scott Silver | 3 more credits » ',
            moviecast: 'Joaquin Phoenix, Robert De Niro, Zazie Beetz |',
            movieduration: 122,
            movieposterurl: '.'
        };

    $scope.movielisting=[
        {cinemas:"20th century Cinemas", showtime:["5.30pm","3.30pm","10.10pm"]}, 
        {cinemas:"Anga Diamond Cinemas", showtime:["10.30pm","6.30pm"]},
        {cinemas:"Anga Sky Cinemas", showtime:["12.30pm","3.30pm"]},
        {cinemas:"Garden City Cinemas", showtime:["2.30pm","3.30pm","12.30pm"]},
        {cinemas:"Junction Mall Cinemas", showtime:["12.30pm","3.30pm","10.30pm"]},
        {cinemas:"Prestige Plaza Cinemas", showtime:["12.30pm","3.30pm"]}
    ];
    
    $scope.showDetails = function (record) {
      $scope.recordDetails = record;
    };
});