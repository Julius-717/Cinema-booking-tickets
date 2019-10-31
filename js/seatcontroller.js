var apps=angular.module('myApp').controller("seatcontroller",function($scope){
$scope.seatslist=[];

for(var i=1;i<=10;i++)
{
$scope.innerarray=[];
for(var j=1;j<=20;j++)
{
var temp={};
temp.rowid=i;
temp.seatnum=j;
$scope.innerarray.push(temp);
}
$scope.seatslist.push($scope.innerarray);
}

});