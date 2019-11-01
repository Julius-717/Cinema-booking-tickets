app.controller('moviesCtrl',['$scope', function($scope,filterFilter,$http) {

    $scope.selectedTab = 1;

    $scope.selectedLang = { movielanguage:"" };
    $scope.recordDetails= undefined;
    $scope.languageslist = ["English"];
    $scope.movieslist= [
        {"movieId": "0001", "moviename" : "Titanic", "imageurl" : "https://upload.wikimedia.org/wikipedia/en/1/19/Titanic_%28Official_Film_Poster%29.png", "movielanguage":"English" },
        {"movieId": "0002", "moviename" : "Sonic", "imageurl" : "https://i.ytimg.com/vi/4mW9FE5ILJs/maxresdefault.jpg", "movielanguage":"English" },
        {"movieId": "0003", "moviename" : "Maleficent", "imageurl" : "https://upload.wikimedia.org/wikipedia/en/7/7b/Maleficent_Mistress_of_Evil_%28Official_Film_Poster%29.png", "movielanguage":"English" },
        {"movieId": "0004", "moviename" : "Joker", "imageurl" : "https://i.ytimg.com/vi/X4Zwpl7VbhA/maxresdefault.jpg", "movielanguage":"English" },
        {"movieId": "0005", "moviename" : "Hellboy", "imageurl" : "https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Hellboy_%282019%29_theatrical_poster.png/220px-Hellboy_%282019%29_theatrical_poster.png", "movielanguage":"English" },
        {"movieId": "0006", "moviename" : "Dark phoenix", "imageurl" : "https://m.media-amazon.com/images/M/MV5BMjAwNDgxNTI0M15BMl5BanBnXkFtZTgwNTY4MDI1NzM@._V1_.jpg", "movielanguage":"English" },
        {"movieId": "0011", "moviename" : "Endgame", "imageurl" : "https://images-na.ssl-images-amazon.com/images/I/81gCaSnFTvL._SL1364_.jpg", "movielanguage":"English" },
        {"movieId": "0011", "moviename" : "Aladdin", "imageurl" : "https://upload.wikimedia.org/wikipedia/en/9/9a/Aladdin_%28Official_2019_Film_Poster%29.png", "movielanguage":"English" },
        {"movieId": "0007", "moviename" : "Charlie`s angels", "imageurl" : "https://upload.wikimedia.org/wikipedia/en/2/2a/Charlie%27s_Angels_%28Official_2019_Film_Poster%29.png", "movielanguage":"English" },
        {"movieId": "0008", "moviename" : "Birds of prey", "imageurl" : "https://upload.wikimedia.org/wikipedia/en/b/b4/BirdsofPreyHarley.jpg", "movielanguage":"English" },
        {"movieId": "0009", "moviename" : "Gemini man", "imageurl" : "https://i.ytimg.com/vi/6orc_lHvJKY/maxresdefault.jpg", "movielanguage":"English" },
        {"movieId": "0010", "moviename" : "Hobbs & Shaw", "imageurl" : "https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Fast_%26_Furious_Presents_Hobbs_%26_Shaw_-_theatrical_poster.jpg/220px-Fast_%26_Furious_Presents_Hobbs_%26_Shaw_-_theatrical_poster.jpg", "movielanguage":"english" },
        {"movieId": "0011", "moviename" : "Angel has fallen", "imageurl" : "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Angel_Has_Fallen_poster.jpg/220px-Angel_Has_Fallen_poster.jpg", "movielanguage":"English" }
    ]

    $scope.showDetails = function (record) {
      $scope.recordDetails = record;
    };


    $scope.comingsoon = [
        {"movieId": "0012", "moviename" : "Terminator 2019", "imageurl" : "https://m.media-amazon.com/images/M/MV5BNzhlYjE5MjMtZDJmYy00MGZmLTgwN2MtZGM0NTk2ZTczNmU5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg", "movielanguage":"English" },
        {"movieId": "0013", "moviename" : "Charlie`s angels", "imageurl" : "https://upload.wikimedia.org/wikipedia/en/2/2a/Charlie%27s_Angels_%28Official_2019_Film_Poster%29.png", "movielanguage":"English" },
        {"movieId": "0014", "moviename" : "Dolittle", "imageurl" : "https://ib3.hulu.com/user/v3/artwork/4d8424ea-2f7d-434d-ac81-53618ab95517?base_image_bucket_name=image_manager&base_image=0a030eee-0d2f-482b-bc3d-9be5bef413f7&size=400x600&format=jpeg", "movielanguage":"English" },
        {"movieId": "0015", "moviename" : "Wonder Woman2", "imageurl" : "https://cdn3.movieweb.com/i/movie/ViSNXyu24TcvKUMZS9MY9s10h7hMqx/384:50/Wonder-Woman-1984.jpg", "movielanguage":"English" },
        {"movieId": "0016", "moviename" : "Jumanji2", "imageurl" : "https://i.ytimg.com/vi/JJxmIneArgE/maxresdefault.jpg", "movielanguage":"English" },
        {"movieId": "0017", "moviename" : "World WarZ 2", "imageurl" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfKJXxjtpI7FKCYFjDHaa5-8bB5ADwnvlphtFllEgIxiKexry_Iw&s", "movielanguage":"English" },
        {"movieId": "0018", "moviename" : "Avatar2", "imageurl" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXt6omBIjzjYAmMsl-b8EB1g2PonHMCJhlJPi4ldcpelWkuXL&s", "movielanguage":"English" }
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