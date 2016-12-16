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

//assignment Example album
var albumFloyd = {
  title: 'The Dark Side of the Moon',
  artist: 'Pink Floyd',
  label: 'Harvest Records',
  year: '1973',
  albumArtUrl: 'assets/images/album_covers/22.png',
  songs: [
    { title: 'Speak to Me', duration: '1:30' },
    { title: 'Breathe', duration: '2:43' },
    { title: 'On the Run', duration: '3:30'},
    { title: 'Time', duration: '6:53' },
    { title: 'The Great Gig in the Sky', duration: '4:15'}
  ]
};

// create function to generate song rows
var createSongRow = function (songNumber, songName, songLength) {
  var template =
      '<tr class="album-view-song-item">'
    + ' <td class="song-item-number">' + songNumber + '</td>'
    + ' <td class="song-item-title">' + songName + '</td>'
    + ' <td class="song-item-duration">' + songLength + '</td>'
    + '</tr>'
    ;

  return template;
};

//create program to create entire album with songrows when window loads.

var setCurrentAlbum = function(album) {
  // we "match" our objects from the album object with our html elements, first the object,and then the child targeted
  var albumTitle = document.getElementsByClassName('album-view-title')[0];
  var albumArtist = document.getElementsByClassName('album-view-artist')[0];
  var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
  var albumImage = document.getElementsByClassName('album-cover-art')[0];
  var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

  // we target the first child and set the nodeValue.
  albumTitle.firstChild.nodeValue = album.title;
  albumArtist.firstChild.nodeValue = album.artist;
  albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
  albumImage.setAttribute('src', album.albumArtUrl);

  // clear list to make sure its empty before we start filling in with songs
  albumSongList.innerHTML = '';

  // create for loop and go over all songs in album and push em into the album list
  for (var i = 0; i < album.songs.length; i++) {
    albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
  }
};

  // calls the function setCurrentAlbum with the album "albumPicasso" when the window loads
window.onload = function () {
  setCurrentAlbum(albumPicasso);
  //Create a var so we can target the picture for click only.
  var x = document.getElementsByClassName('album-cover-art')[0];
  //create array with albums
  var albums = [albumPicasso, albumMarconi, albumFloyd];
    // we need to choose index 1 as first click, as we are on index 0 , and else we click to same img
    var index = 1;
    //add EventListener with click, followed by function that will swap picture
    x.addEventListener('click', function(event) {
      //at click, set current album to albums index (that we have set to 1 so it will take picture 2 in queue)
      setCurrentAlbum(albums[index]);
      // then we increment the index by 1 for next time.
      index++;
      // incase we are at end of albums, we go put index value to 0 so it is ready to start over.
      if (index == albums.length) {
        index = 0;
      }
    });
  };
