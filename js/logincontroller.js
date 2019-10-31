var apps=angular.module('myApp').controller("logincontroller",function($scope,$location){

$scope.go=function(){
 document.querySelector('.cont').classList.toggle('s--signup');
}

$scope.signin=function()
{
var email="rak";
console.log($scope.email);
if(email==email)
{
console.log("hellol");
location.href = "admin.html";
}
}

$scope.selectedTab = 1;


});