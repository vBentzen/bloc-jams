//get current song
function setSong(songNumber){
  if (currentSoundFile) {
      currentSoundFile.stop();
  }

  currentlyPlayingSongNumber = parseInt(songNumber);
  currentSongFromAlbum = currentAlbum.songs[songNumber - 1];

  currentSoundFile = new buzz.sound(currentSongFromAlbum.audioUrl, {
    formats: [ 'mp3' ],
    preload: true
  });

  setVolume(currentVolume);
};

var setVolume = function(volume) {
  if (currentSoundFile) {
      currentSoundFile.setVolume(volume);
  }
};

function getSongNumberCell(number) {
    return $('.song-item-number[data-song-number="' + number + '"]');
};

// create function to generate song rows
var createSongRow = function (songNumber, songName, songLength) {
  var template =
  '<tr class="album-view-song-item">'
  + ' <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
  + ' <td class="song-item-title">' + songName + '</td>'
  + ' <td class="song-item-duration">' + songLength + '</td>'
  + '</tr>'
  ;
  var $row = $(template);

  var clickHandler = function() {

    var songNumber = parseInt($(this).attr('data-song-number'));

    if (currentlyPlayingSongNumber !== null) {
      // Revert to song number for currently playing song because user started playing new song.
      var currentlyPlayingCell = getSongNumberCell(currentlyPlayingSongNumber);
      currentlyPlayingCell.html(currentlyPlayingSongNumber);
    }
    if (currentlyPlayingSongNumber !== songNumber) {
      // Switch from Play -> Pause button to indicate new song is playing.
      $(this).html(pauseButtonTemplate);
      setSong(songNumber);
      //need to play currentSoundFile AFTER calling setSong()
      currentSoundFile.play();
      updatePlayerBarSong();
    } else if (currentlyPlayingSongNumber === songNumber) {
      // Switch from Pause -> Play button to pause currently playing song.
      //create condition statement that checks if currentSoundFile is paused
      // if paused: start play song and revert icon to pause button
      // if not paused, go pause it and set icon back to play.
      if(currentSoundFile.isPaused()) {
          $(this).html(pauseButtonTemplate);
          $('.main-controls .play-pause').html(playerBarPauseButton);
          currentSoundFile.play();
      } else {
          $(this).html(playButtonTemplate);
          $('.main-controls .play-pause').html(playerBarPlayButton);
          currentSoundFile.pause();
      }
    }
  };

  var onHover = function(event) {
    var songNumberCell = $(this).find('.song-item-number');
    var songNumber = parseInt(songNumberCell.attr('data-song-number'));

    if (songNumber !== currentlyPlayingSongNumber) {
      songNumberCell.html(playButtonTemplate);
    }
  };

  var offHover = function(event) {
    var songNumberCell = $(this).find('.song-item-number');
    var songNumber = parseInt(songNumberCell.attr('data-song-number'));

    if (songNumber !== currentlyPlayingSongNumber) {
      songNumberCell.html(songNumber);
    }
  };
  $row.find('.song-item-number').click(clickHandler);
  $row.hover(onHover, offHover);
  return $row;
};

//create program to create entire album with songrows when window loads.

var setCurrentAlbum = function(album) {
  currentAlbum = album;
  // we "match" our objects from the album object with our html elements, first the object,and then the child targeted
  var $albumTitle = $('.album-view-title');
  var $albumArtist = $('.album-view-artist');
  var $albumReleaseInfo = $('.album-view-release-info');
  var $albumImage = $('.album-cover-art');
  var $albumSongList = $('.album-view-song-list');

  // we target the first child and set the nodeValue.
  $albumTitle.text(album.title);
  $albumArtist.text(album.artist);
  $albumReleaseInfo.text(album.year + ' ' + album.label);
  $albumImage.attr('src', album.albumArtUrl);

  // clear list to make sure its empty before we start filling in with songs
  $albumSongList.empty();

  // create for loop and go over all songs in album and push em into the album list
  for (var i = 0; i < album.songs.length; i++) {
    var $newRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
    $albumSongList.append($newRow);
  }
};

var trackIndex = function(album, song) {
  return album.songs.indexOf(song);
};

var updatePlayerBarSong = function() {
  $('.currently-playing .song-name').text(currentSongFromAlbum.title);
  $('.currently-playing .artist-name').text(currentAlbum.artist);
  $('.currently-playing .artist-song-mobile').text(currentSongFromAlbum.title + " - " + currentAlbum.artist);
  $('.main-controls .play-pause').html(playerBarPauseButton);
};

var nextSong = function() {

  //Know what current song is aswell as previous
  // if on last song, go to first song(index 0 )
  //Use the trackIndex function to get the index of current song, and then increment the number
  //then set the new song to current song of currentSongFromAlbum
  //update the player bar to show the new song
  // also update html of previous song's '.song-item-number' with a number
  // and then update html of the new song with pause button.

  var getLastSongNumber = function(index) {
    return index == 0 ? currentAlbum.songs.length : index;
  };

  //first currentSongIndex, and increment it.
  var currentSongIndex = trackIndex(currentAlbum, currentSongFromAlbum);
  currentSongIndex++;

  //If we are on last song, go to first song.
  if (currentSongIndex >= currentAlbum.songs.length) {
    currentSongIndex = 0;
  }

  // Set a new current song and Update the Player Bar
  setSong(currentSongIndex +1);
  currentSoundFile.play();
  updatePlayerBarSong();

  var lastSongNumber = getLastSongNumber(currentSongIndex);
  var $nextSongNumberCell = getSongNumberCell(currentlyPlayingSongNumber);
  var $lastSongNumberCell = getSongNumberCell(lastSongNumber);

  $nextSongNumberCell.html(pauseButtonTemplate);
  $lastSongNumberCell.html(lastSongNumber);
};


var previousSong = function() {

  var getLastSongNumber = function(index) {
    return index == (currentAlbum.songs.length - 1) ? 1 : index + 2;
  };

  //first currentSongIndex, and increment it.
  var currentSongIndex = trackIndex(currentAlbum, currentSongFromAlbum);
  currentSongIndex--;

  //If we are on first song, go to last song in album
  if (currentSongIndex < 0) {
    currentSongIndex = currentAlbum.songs.length - 1;
  }

  // Set a new current song and Update the Player Bar
  setSong(currentSongIndex + 1);
  currentSoundFile.play();
  updatePlayerBarSong();

  var lastSongNumber = getLastSongNumber(currentSongIndex);
  var $previousSongNumberCell = getSongNumberCell(currentlyPlayingSongNumber);
  var $lastSongNumberCell = getSongNumberCell(lastSongNumber);

  $previousSongNumberCell.html(pauseButtonTemplate);
  $lastSongNumberCell.html(lastSongNumber);
};

var togglePlayFromPlayerBar = function() {
  //if a song is paused and play btn is clicked in player bar
  //1go change song number cell from play btn to pause btn
  //2change html of player bars play btn to pause btn
  //3play the song
  let playingNumberCell = getSongNumberCell(currentlyPlayingSongNumber);
  if (currentSoundFile.isPaused()) {
    //1
    playingNumberCell.html(pauseButtonTemplate);
    //2
    $togglePlayFromPlayerBar.html(playerBarPauseButton);
    //3
    currentSoundFile.play();
  }

  //if song is playing(current sound file is defined) and pause btn is clicked
  //change song number cell from pause to play btn.
  //change html of player bar btn from pause to play.
  //pause the song
  if (currentSoundFile) {
    //1
    playingNumberCell.html(playButtonTemplate);
    //2
    $togglePlayFromPlayerBar.html(playerBarPlayButton);
    //3
    currentSoundFile.pause();
  }
};



//Album button template
var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';
var playerBarPlayButton = '<span class="ion-play"></span>';
var playerBarPauseButton = '<span class="ion-pause"></span>';

//store state of playing songs(Starting at null so no song is selected at start)
var currentAlbum = null;
var currentlyPlayingSongNumber = null;
var currentSongFromAlbum = null;
var currentSoundFile = null;
var currentVolume = 80;

var $togglePlayFromPlayerBar = $('.main-controls .play-pause');
var $previousButton = $('.main-controls .previous');
var $nextButton = $('.main-controls .next');
// calls the function setCurrentAlbum with the album "albumPicasso" when the window loads
$(document).ready(function() {
  setCurrentAlbum(albumPicasso);
  $previousButton.click(previousSong);
  $nextButton.click(nextSong);
  $togglePlayFromPlayerBar.click(togglePlayFromPlayerBar);
});
