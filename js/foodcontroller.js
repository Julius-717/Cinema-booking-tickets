var apps=angular.module("myApp");
apps.controller("foodcontroller",function($scope){
$scope.records=[1,2,3,4];
$scope.count=0;
$scope.foodsub=function(){
  if($scope.count>0)
  {
  $scope.count=$scope.count-1
  }
  else
  {
    $scope.count=0;
  }
},

$scope.foodadd=function(){
  $scope.count=$scope.count+1;
}


})