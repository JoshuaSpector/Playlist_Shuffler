var shuffleApp = angular.module('shuffleApp',[]);

shuffleApp.controller('shuffleController', ['$scope', function($scope){

  $scope.removeSong = function(song){
    var songPosition = $scope.song.indexOf(song);
    $scope.songs.splice(songPosition, 1);
  }

  $scope.addSong = function(){
    $scope.songs.push({
      name:$scope.newsong.name,
      artist:$scope.newsong.artist,
      id:$scope.songs.length + 1,
      available: true
    });
    $scope.newsong.name = "",
    $scope.newsong.artist = ""
  };

  $scope.shuffleSongsStandard = function(order){
    angular.forEach($scope.songs, function(song, id){
      var arrayLength = $scope.songs.length
      var randomInteger = Math.floor(Math.random() * 4);
      song.id = randomInteger

    });
  };

$scope.songs = [
  {id: 3,
  name: "Back in Black",
  artist: "ACDC"},
  {id: 2,
  name: "Stairway to Heaven",
  artist: "Led Zeppelin"},
  {id: 1,
  name: "Iron Man",
  artist: "Black Sabbath"}
];


 var arrayLength = $scope.songs.length;
}]);
