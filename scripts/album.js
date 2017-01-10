//generate album objects(create first as nxtpart(template) etc needs to use it)
//Example album
var albumPicasso = {
  title: 'The Colors',
  artist: 'Pablo Picasso',
  label: 'Cubism',
  year: '1881',
  albumArtUrl: 'assets/images/album_covers/01.png',
  songs: [
    { title: 'Blue', duration: '4:26' },
    { title: 'Green', duration: '3:14' },
    { title: 'Red', duration: '5:01' },
    { title: 'Pink', duration: '3:21'},
    { title: 'Magenta', duration: '2:15'}
  ]
};

//Another Example Album
var albumMarconi = {
  title: 'The Telephone',
  artist: 'Guglielmo Marconi',
  label: 'EM',
  year: '1909',
  albumArtUrl: 'assets/images/album_covers/20.png',
  songs: [
    { title: 'Hello, Operator?', duration: '1:01' },
    { title: 'Ring, ring, ring', duration: '5:01' },
    { title: 'Fits in your pocket', duration: '3:21'},
    { title: 'Can you hear me now?', duration: '3:14' },
    { title: 'Wrong phone number', duration: '2:15'}
  ]
};

// create function to generate song rows
var createSongRow = function (songNumber, songName, songLength) {
  var template =
      '<tr class="album-view-song-item">'
      + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
      + ' <td class="song-item-title">' + songName + '</td>'
      + ' <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;
      var $row = $(template);

  var clickHandler = function() {
    var songNumber = $(this).attr('data-song-number');

    if (currentlyPlayingSong !== null) {
      var currentlyPlayingCell = $('[data-song-number="' + currentlyPlayingSong + '"]');
      currentlyPlayingCell.html(currentlyPlayingSong);
    }
    if (currentlyPlayingSong !== songNumber) {
      $(this).html(pauseButtonTemplate);
      currentlyPlayingSong = songNumber;
    } else if (currentlyPlayingSong === songNumber) {
      $(this).html(playButtonTemplate);
      currentlyPlayingSong = null;
    }
  };

  var onHover = function(event) {
    var songCell = $(this).find('.song-item-number');
    var songNumber = songCell.attr('data-song-number');
    if (songNumber !== currentlyPlayingSong) {
      songCell.html(playButtonTemplate);
    }
  };
  var offHover = function(event) {
    var songCell = $(this).find('.song-item-number');
    var songNumber = songCell.attr('data-song-number');
    if (songNumber !== currentlyPlayingSong) {
      songCell.html(songNumber);
    }
  };

  $row.find('.song-item-number').click(clickHandler);
  $row.hover(onHover, offHover);
  return $row;
};

//create program to create entire album with songrows when window loads.

var setCurrentAlbum = function(album) {
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

//Album button template
var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
 var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';

//store state of playing songs(Starting at null so no song is selected at start)
var currentlyPlayingSong = null;
  // calls the function setCurrentAlbum with the album "albumPicasso" when the window loads
$(document).ready(function() {
  setCurrentAlbum(albumPicasso);
});
