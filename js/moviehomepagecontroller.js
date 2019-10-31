var apps= angular.module('myApp').controller('movieHomeCTRL',function($scope){

    $scope.today = new Date();
    $scope.startDate = new Date();
    $scope.seconddate = $scope.startDate.setDate($scope.startDate.getDate() + 1);
    $scope.thirddate = $scope.startDate.setDate($scope.startDate.getDate() + 1);
    $scope.fourthdate = $scope.startDate.setDate($scope.startDate.getDate() + 1);
    $scope.fifthdate = $scope.startDate.setDate($scope.startDate.getDate() + 1);

    $scope.filterObject = { cinemas : "", showtime : "" };    
    $scope.recordDetails= undefined;
    $scope.cinemas= ["Palazzo Cinemas", "Escape Cinemas", "PVR Cinemas", "Kamala Cinemas", "Sathyam Cinemas", "Luxe Cinemas"];
    $scope.showtimes= ["Noon", "Matinee", "Evening", "Night"];
    
    $scope.movieDetails = 
        {
            movieId: 001,
            moviename: 'Aval',
            moviesynopsis: 'A neurosurgeon (played by Siddharth) and his wife (played by Andrea Jeremiah), a newly-wed couple move into a new neighborhood and soon realize that the house next door, inhabiting a little girl and her mother, is haunted. Although initially reluctant to believe the stories of supernatural elements, the doctor, after a close encounter with the possessed resorts to exorcism to help save the neighbors.',
            movielanguage: 'Tamil',
            movierating: 'A',
            moviegenre: 'Horror, Thriller',
            moviecrew: 'Milind Rau (Director), Shreyaas Krishna (Director of Photography), Girishh Gopalakrishnan (Music Director)',
            moviecast: 'Andrea Jeremiah, Siddharth Narayan',
            movieduration: 137,
            movieposterurl: 'images/aval-poster.jpg'
        };

    $scope.movielisting=[
        {cinemas:"Sathyam Cinemas", showtime:["5.30pm","3.30pm","10.10pm"]}, 
        {cinemas:"Escape Cinemas", showtime:["10.30pm","6.30pm"]},
        {cinemas:"Luxe Cinemas", showtime:["12.30pm","3.30pm"]},
        {cinemas:"Kamala Cinemas", showtime:["2.30pm","3.30pm","12.30pm"]},
        {cinemas:"PVR Cinemas", showtime:["12.30pm","3.30pm","10.30pm"]},
        {cinemas:"Palazzo Cinemas", showtime:["12.30pm","3.30pm"]}
    ];
    
    $scope.showDetails = function (record) {
      $scope.recordDetails = record;
    };
});