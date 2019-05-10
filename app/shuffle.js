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

  $scope.shuffleSongsStandard = function(songs){
     angular.forEach($scope.songs, function(song, id){
     var ids = [];
      while(ids.length < songs.length){
          var randomNumber = Math.floor(Math.random()*songs.length);
          if(ids.indexOf(randomNumber) === -1) ids.push(randomNumber);
      }
      for (var i = 0; i<songs.length; i++)
      {
        songs[i].id = ids[i];
    }
  })
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
  artist: "Black Sabbath"},
  {id: 4,
  name: "Timeless",
  artist: "Goldie"},
  {id: 5,
  name: "Buffalo Soldier",
  artist: "Bob Marley"},
  {id: 6,
  name: "Free Bird",
  artist: "Lynyrd Skynyrd"},
  {id: 7,
  name: "So What",
  artist: "Miles Davis"}
];


 var arrayLength = $scope.songs.length;
}]);
