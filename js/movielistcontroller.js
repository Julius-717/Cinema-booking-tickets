app.controller('moviesCtrl',['$scope', function($scope,filterFilter,$http) {

    $scope.selectedTab = 1;

    $scope.selectedLang = { movielanguage:"" };
    $scope.recordDetails= undefined;
    $scope.languageslist = ["English"];
    $scope.movieslist= [
        {"movieId": "0001", "moviename" : "Aval", "imageurl" : "http://bit.ly/2hZVKQX", "movielanguage":"Tamil" },
        {"movieId": "0002", "moviename" : "Blade Runner", "imageurl" : "http://bit.ly/2zLHVQA", "movielanguage":"English" },
        {"movieId": "0003", "moviename" : "Geostorm", "imageurl" : "http://bit.ly/2yN2Q5K", "movielanguage":"English" },
        {"movieId": "0004", "moviename" : "Golmaal Again", "imageurl" : "http://bit.ly/2zwDQNg", "movielanguage":"Hindi" },
        {"movieId": "0005", "moviename" : "ITTEFAQ", "imageurl" : "http://bit.ly/2jeP9Wg", "movielanguage":"Hindi" },
        {"movieId": "0006", "moviename" : "Mersal", "imageurl" : "http://bit.ly/2zxOqFA", "movielanguage":"tamil" },
        {"movieId": "0011", "moviename" : "PSV Garuda Vega", "imageurl" : "http://bit.ly/2iJlUqH", "movielanguage":"telugu" },
        {"movieId": "0011", "moviename" : "Raja The Great", "imageurl" : "http://bit.ly/2yN6Z9Y", "movielanguage":"telugu" },
        {"movieId": "0007", "moviename" : "Secret Superstar", "imageurl" : "http://bit.ly/2jdUqgS", "movielanguage":"hindi" },
        {"movieId": "0008", "moviename" : "Solo", "imageurl" : "http://bit.ly/2ymUbTa", "movielanguage":"malayalam" },
        {"movieId": "0009", "moviename" : "The Foreigner", "imageurl" : "http://bit.ly/2jdVbGH", "movielanguage":"english" },
        {"movieId": "0010", "moviename" : "Thor Ragnarok", "imageurl" : "http://bit.ly/2zrFGBx", "movielanguage":"english" },
        {"movieId": "0011", "moviename" : "Villain", "imageurl" : "http://bit.ly/2zwRaBb", "movielanguage":"malayalam" }
    ]

    $scope.showDetails = function (record) {
      $scope.recordDetails = record;
    };


    $scope.comingsoon = [
        {"movieId": "0012", "moviename" : "2.0", "imageurl" : "http://bit.ly/2m8noQh", "movielanguage":"tamil" },
        {"movieId": "0013", "moviename" : "Tiger Zinda Hai", "imageurl" : "http://bit.ly/2jfQhZO", "movielanguage":"hindi" },
        {"movieId": "0014", "moviename" : "Padmavati", "imageurl" : "http://bit.ly/2zwxOhx", "movielanguage":"hindi" },
        {"movieId": "0015", "moviename" : "Sahoo", "imageurl" : "http://bit.ly/2zrThIU", "movielanguage":"telugu" },
        {"movieId": "0016", "moviename" : "Justice League", "imageurl" : "http://bit.ly/2hgHG4J", "movielanguage":"english" },
        {"movieId": "0017", "moviename" : "Star wars: Last Jedi", "imageurl" : "http://bit.ly/2AyL9UW", "movielanguage":"english" },
        {"movieId": "0018", "moviename" : "Karuppu Raja Vellai Raja", "imageurl" : "http://bit.ly/2hY2rD4", "movielanguage":"tamil" }
    ];


    $(function () {
        $('#selectTitle').multiselect({
            width: 200,
            nonSelectedText: 'Select Language',
            includeSelectAllOption: true,
            nSelectedText: 'Languages Selected',
        });
    });    
}]);