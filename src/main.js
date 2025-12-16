document.addEventListener("DOMContentLoaded", () => {
  const playBtn = document.getElementById("playMelodyBtn");
  const audio = document.getElementById("melodyAudio");

  playBtn.addEventListener("click", function (e) {
    e.preventDefault();

    audio.play().catch((error) => {
      console.log("Playback error:", error);
    });
  });
});

const audioPlayer = document.getElementById("globalAudio");
const songs = document.querySelectorAll(".song-item");

let currentSong = null;

songs.forEach((song) => {
  song.addEventListener("click", () => {
    const src = song.dataset.src;
    const icon = song.querySelector(".play-icon i");
    const title = song.querySelector(".song-title");

    if (!src) {
      console.error("No data-src found");
      return;
    }

    if (currentSong === song && !audioPlayer.paused) {
      audioPlayer.pause();
      icon.className = "fas fa-play";
      title.classList.remove("playing");
      return;
    }

    songs.forEach((s) => {
      s.querySelector(".play-icon i").className = "fas fa-play";
      s.querySelector(".song-title").classList.remove("playing");
    });

    audioPlayer.src = src;
    audioPlayer.load();
    audioPlayer.play().catch((err) => console.error(err));

    icon.className = "fas fa-pause";
    title.classList.add("playing");

    currentSong = song;
  });
});

audioPlayer.addEventListener("ended", () => {
  if (currentSong) {
    currentSong.querySelector(".play-icon i").className = "fas fa-play";
    currentSong.querySelector(".song-title").classList.remove("playing");
    currentSong = null;
  }
});

/* song details*/
const songDetails = {
  "01": {
    title: "Here on our knees",
    artist: "Oncemore Six",
    description: "A powerful worship song about humility before God.",
    lyrics: `
With lifted hands
We worship You
With lifted hands
We worship You
With lifted hands
We worship You
With all we have
We worship You
With all we have
We worship You
With all we have
We worship You
Here on our knees
We worship You
Here on our knees
We worship You
Here on our knees
We worship You
We bow before You
We honor You
Here on our knees
We worship You
    `,
  },
  "02": {
    title: "Bow down and Worship Him",
    artist: "Benjamin Dube",
    description: "Before the earth was formed, You are God.",
    lyrics: `
Bow down and worship Him
Bow down and worship Him
Worship Him, oh worship Him
Bow down and worship Him
Bow down and worship Him
Worship Him, oh worship Him
Jesus, the king (Jesus, the King of kings)
Jesus, the King of kings
Worship (worship Him)
Bow down and worship Him
Bow down (bow down and worship Him)
Worship (wor-) oh (-ship Him)
We've come to worship (oh worship Him)
Bow down and worship (bow down and) oh (worship Him)
Bow (bow down) down (and wor-) we worship (-ship Him)
Worship (worship) we (Him)
Oh worship Him
Consuming Fire (Consuming Fire)
Sweet Perfume (Sweet Perfume)
Your Awesome Presence (His Awe-) oh God (-some Presence)
Fills this place (fill this place)
For this is Holy (for this) ground (is)
Is Ho- (Holy ground) -ly ground
So come (so come) and (and bow down)
Consuming Fire (Consuming Fire)
Sweet Perfume, oh God (Sweet Perfume)
Your Awesome Presence (His Awesome Presence)
Would You fill this place (fill this place)
For this is Holy (for this is)
Is Ho- (Holy ground) -ly, Holy ground
So come (so come) so come and (and bow) eh, eh, yeah (down)
Say, for the last time, come on everybody
Consuming Fire (Consuming Fire)
Sweet Perfume (Sweet Perfume)
Your Awesome Presence (His Awesome Presence)
Would You fill my life (fill this) oh (place)
For this is Holy (for this) ground (is)
This Ho- (Holy ground) -ly ground
So come and (so come) and (and bow down)
Say it for the last time, bow down
Come on and say
Bow down and worship Him
Bow down (bow down and wor-) and worship (-ship Him)
Worship (worship Him)
Oh-oh, oh-oh (oh, worship Him)
    `,
  },
  "03": {
    title: "No Foreign God",
    artist: "Benjamin Dube",
    description: "A pledge to keep serving the Lord God alone.",
    lyrics: `
I will serve no foreign god
Nor any other treasure
For You are my heart's desire
The Spirit without measure
Unto Your Name
(Unto Your Name)
I will bring (I will bring)
My sacrifice (my sacrifice)
I will serve no foreign god
(I will) I will serve (serve no fo-) no foreign god (-reign god)
This is my vow tonight
Nor any (nor) other (any) treasure (other) oh Lord, eh yeah (treasure)
You are my heart's desire
(You are my heart's) heart's desire (desire)
The Spirit without measure
(The Spirit) oh, oh Lord, eh, measure (without measure)
Unto Your Name (unto Your Name)
I will bring, Lord (I will) I am (bring)
A sacrifice (my sacrifice)
Unto Your Name, unto Your Name
(Unto) unto (Your) Your (Name)
I will bring (I will bring) hey
My sacrifice (my sacrifice) I am a sacrifice
Oh-oh, uh
I am a sacrifice unto Your Name
(Unto your Name)
I will bring (I will bring)
Lord, my sacrifice (my sacrifice)
Bow down and worship, everybody
Worship Him (worship Him)
Oh-oh-oh-oh (oh, worship Him)
Yes, yes, c'mon
(Oh, worship Him)
(Jesus the King of kings)
Jesus the (Jesus) Jesus the King (the King of kings)
Worship Him (worship Him) glory to God
Oh, worship Him (oh, worship Him)
Say Jesus the King (Jesus the King of kings)
Thank You, Lord
Jesus (Jesus, the King of kings)
Worship Him (worship Him)
Oh-oh-uh (oh, worship Him)
    `,
  },
  "04": {
    title: "ADONAI",
    artist: "Nathaniel Bassey",
    description:
      "It’s a beautiful soul-lifting song that could make you cry deeply in gratitude and worship the Lord. ",
    lyrics: `
AH AH AH AH, AH AH AH
AH AH, Adonai
AH AH AH AH, AH AH AH
AH AH, Adonai

AH AH AH AH, AH AH AH
AH AH AH, Adonai
AH AH AH AH, AH AH AH
AH AH, Adonai

AH AH AH AH, AH AH AH
AH AH, Adonai
AH AH AH AH, AH AH AH
AH AH, Adonai

[Verse]
From the Rising of the Sun
To the Setting of the same
Your Name is to be Hallowed
AH AH, Adonai

From the Rising of the Sun
To the Setting of the same
Your Name is to be Hallowed
AH AH, Adonai

[Chorus]
AH AH AH AH, AH AH AH
AH AH, Adonai
AH AH AH AH, AH AH AH
AH AH, Adonai

AH AH AH AH, AH AH AH
AH AH, Adonai
AH AH AH AH, AH AH AH
AH AH, Adonai

[Repeat Verse]
From the Rising of the Sun
To the Setting of the same
Your Name is to be Hallowed
AH AH, Adonai

From the Rising of the Sun
To the Setting of the same
Your Name is to be Hallowed
AH AH, Adonai

From the Rising of the Sun
To the Setting of the same
Your Name is to be Hallowed
AH AH, Adonai

From the Rising of the Sun
To the Setting of the same
Your Name is to be Hallowed
AH AH, Adonai

From the Rising of the Sun
To the Setting of the same
Your Name is to be Hallowed
AH AH, Adonai

From the Rising of the Sun
To the Setting of the same
Your Name is to be Hallowed
AH AH, Adonai

AH AH, Adonai
AH AH, Adonai
AH AH, Adonai
AH AH, Adonai

AH AH, Adonai
AH AH, Adonai
AH AH, Adonai
AH AH, Adonai

AH AH, Adonai
AH AH, Adonai
AH AH, Adonai
AH AH, Adonai

Adonai, Adonai
Adonai, Adonai
    `,
  },
  "05": {
    title: "El-Shaddai Adonai",
    artist: "Nathaniel Bassey",
    description:
      "From the rising of the sun, to the setting of the same. Your name is to be Hallowed.",
    lyrics: `
Elshaddai, Adonai
We Worship You
Elshaddai, Adonai
We Worship You

[Verse]
All Sufficient, Almighty God
Sovereign One
Yahweh of Israel
Elshaddai, Adonai
We Worship You

[Chorus]
Elshaddai, Adonai
We Worship You
(You are) Elshaddai,
(You are) Adonai
We Worship You

[Repeat Verse]
All Sufficient, Almighty God
Sovereign One
Yahweh of Israel
Elshaddai, Adonai
We Worship You

[Chorus]
Elshaddai, Adonai
We Worship You
Elshaddai, Adonai
We Worship You

[Repeat Verse]
All Sufficient, Almighty God
Sovereign One
Yahweh of Israel
Elshaddai, Adonai
We Worship You

All Sufficient, Almighty God
Sovereign One
Yahweh of Israel
Elshaddai, Adonai
We Worship You

[Chorus]
Elshaddai, Adonai
We Worship You
Elshaddai, Adonai
We Worship You

[Repeat Verse]
All Sufficient, Almighty God
Sovereign One
Yahweh of Israel
Elshaddai, Adonai
We Worship You

All Sufficient, Almighty God
Sovereign One
Yahweh of Israel
Elshaddai, Adonai
We Worship You

[Chorus]
Elshaddai, Adonai
We Worship You
Elshaddai, Adonai
We Worship You
Elshaddai, Adonai
We Worship You

[Repeat Verse]
All Sufficient, Almighty God
Sovereign One
Yahweh of Israel
Elshaddai, Adonai
We Worship You

All Sufficient, Almighty God
Sovereign One
Yahweh of Israel
Elshaddai, Adonai
We Worship You
Elshaddai, Adonai
We Worship You
    `,
  },
  "06": {
    title: "Exalted",
    artist: "Nathaniel Bassey",
    description: "A declaration of God's unmatched worth.",
    lyrics: `
Your Name is Exalted
In the Heavens
Exalted in the Earth
HALLELUJAH

Your Name is Exalted
In the Heavens
Exalted in the Earth
HALLELUJAH

Your Name is Exalted
In the Heavens
Exalted in this Place
HALLELUJAH

Your Name is Exalted
In the Heavens
Exalted in the Earth
HALLELUJAH

[Verse 1]
Oh Lord
Your Kingdom Reigns Forever
Your Kingdom has no End
HALLELUJAH

Oh Lord
Your Kingdom Reigns Forever
Your Kingdom has no End
HALLELUJAH

[Verse 2]
Your Name
Is the Alpha and Omega
Beginning and the End
HALLELUJAH

Your Name
Is the Alpha and Omega
Beginning and the End
HALLELUJAH

[Chorus]
Your Name is Exalted
In the Heavens
Exalted in this Place
HALLELUJAH

Your Name is Exalted
In the Heavens
Exalted in this Place
HALLELUJAH

Your Name is Exalted
In the Heavens
Exalted in this Place
HALLELUJAH

Your Name is Exalted
In the Heavens
Exalted in this Place
HALLELUJAH

[Repeat Verse]
Oh Lord
Your Kingdom Reigns Forever
Your Kingdom has no End
HALLELUJAH

Your Name
Is the Alpha and Omega
Beginning and the End
HALLELUJAH
    `,
  },
  "07": {
    title: "Holy are You Lord",
    artist: "Jesus Image",
    description: "A declaration of God's unmatched Holiness.",
    lyrics: `
All the saints and angels  
They bow before Your throne  
All the elders cast their crowns...
    `,
  },
  "08": {
    title: "You are Holy",
    artist: "Jesus Image",
    description: "A declaration of God's unmatched Holiness.",
    lyrics: `
I saw the Lord
Seated on His throne
He was clothed in glory
Exalted high
And the train of His robe
Fills the temple
And the angels circle ‘round Him
And they cry

Chorus

They cry You are Holy
Oh so Holy
You are Holy Lord of all

Verse

I saw the Lord
Seated on His throne
He was clothed in glory
Exalted high
And the train of His robe
Fills the temple
And the angels circle ‘round Him
And they cry

Chorus

They cry You are Holy
Oh so Holy
You are Holy Lord of all

Chorus

We cry You are Holy
Oh so Holy
You are Holy Lord of all

Chorus

They cry You are Holy
Oh so Holy
You are Holy Lord of all

Chorus

We cry You are Holy
Oh so Holy
You are Holy Lord of all

Verse

I saw the Lord
Seated on His throne
He was clothed in glory
Exalted high
And the train of His robe
Fills the temple
And the angels circle ‘round Him
And they cry

Chorus

You are Holy
Oh so Holy
You are Holy Lord of all

Chorus

We cry You are Holy
Oh so Holy
You are Holy Lord of all
    `,
  },
  13: {
    title: "Worthy of it All",
    artist: "CeCe Winans",
    description: "A declaration of God's unmatched worth.",
    lyrics: `
All the saints and angels  
They bow before Your throne  
All the elders cast their crowns...
    `,
  },
  13: {
    title: "Worthy of it All",
    artist: "CeCe Winans",
    description: "A declaration of God's unmatched worth.",
    lyrics: `
All the saints and angels  
They bow before Your throne  
All the elders cast their crowns...
    `,
  },
  13: {
    title: "Worthy of it All",
    artist: "CeCe Winans",
    description: "A declaration of God's unmatched worth.",
    lyrics: `
All the saints and angels  
They bow before Your throne  
All the elders cast their crowns...
    `,
  },
  13: {
    title: "Worthy of it All",
    artist: "CeCe Winans",
    description: "A declaration of God's unmatched worth.",
    lyrics: `
All the saints and angels  
They bow before Your throne  
All the elders cast their crowns...
    `,
  },
  13: {
    title: "Worthy of it All",
    artist: "CeCe Winans",
    description: "A declaration of God's unmatched worth.",
    lyrics: `
All the saints and angels  
They bow before Your throne  
All the elders cast their crowns...
    `,
  },
  13: {
    title: "Worthy of it All",
    artist: "CeCe Winans",
    description: "A declaration of God's unmatched worth.",
    lyrics: `
All the saints and angels  
They bow before Your throne  
All the elders cast their crowns...
    `,
  },
  13: {
    title: "Worthy of it All",
    artist: "CeCe Winans",
    description: "A declaration of God's unmatched worth.",
    lyrics: `
All the saints and angels  
They bow before Your throne  
All the elders cast their crowns...
    `,
  },
  13: {
    title: "Worthy of it All",
    artist: "CeCe Winans",
    description: "A declaration of God's unmatched worth.",
    lyrics: `
All the saints and angels  
They bow before Your throne  
All the elders cast their crowns...
    `,
  },
  13: {
    title: "Worthy of it All",
    artist: "CeCe Winans",
    description: "A declaration of God's unmatched worth.",
    lyrics: `
All the saints and angels  
They bow before Your throne  
All the elders cast their crowns...
    `,
  },
  13: {
    title: "Worthy of it All",
    artist: "CeCe Winans",
    description: "A declaration of God's unmatched worth.",
    lyrics: `
All the saints and angels  
They bow before Your throne  
All the elders cast their crowns...
    `,
  },
  13: {
    title: "Worthy of it All",
    artist: "CeCe Winans",
    description: "A declaration of God's unmatched worth.",
    lyrics: `
All the saints and angels  
They bow before Your throne  
All the elders cast their crowns...
    `,
  },
  13: {
    title: "Worthy of it All",
    artist: "CeCe Winans",
    description: "A declaration of God's unmatched worth.",
    lyrics: `
All the saints and angels  
They bow before Your throne  
All the elders cast their crowns...
    `,
  },
  13: {
    title: "Worthy of it All",
    artist: "CeCe Winans",
    description: "A declaration of God's unmatched worth.",
    lyrics: `
All the saints and angels  
They bow before Your throne  
All the elders cast their crowns...
    `,
  },
  13: {
    title: "Worthy of it All",
    artist: "CeCe Winans",
    description: "A declaration of God's unmatched worth.",
    lyrics: `
All the saints and angels  
They bow before Your throne  
All the elders cast their crowns...
    `,
  },
  13: {
    title: "Worthy of it All",
    artist: "CeCe Winans",
    description: "A declaration of God's unmatched worth.",
    lyrics: `
All the saints and angels  
They bow before Your throne  
All the elders cast their crowns...
    `,
  },
  13: {
    title: "Worthy of it All",
    artist: "CeCe Winans",
    description: "A declaration of God's unmatched worth.",
    lyrics: `
All the saints and angels  
They bow before Your throne  
All the elders cast their crowns...
    `,
  },
};

const lyricsPanel = document.getElementById("lyricsPanel");
const lyricsTitle = lyricsPanel.querySelector(".song-title");
const lyricsArtist = lyricsPanel.querySelector(".song-artist");
const lyricsDescription = lyricsPanel.querySelector(".song-description");
const lyricsBody = lyricsPanel.querySelector(".lyrics-body");

songs.forEach((song) => {
  song.addEventListener("click", () => {
    const key = song.dataset.key;
    const data = songDetails[key];

    if (!data) {
      lyricsTitle.textContent = "Lyrics not available";
      lyricsArtist.textContent = "";
      lyricsDescription.textContent = "";
      lyricsBody.innerHTML = "<p class='text-muted'>No lyrics yet.</p>";
      return;
    }

    lyricsTitle.textContent = `${key}. ${data.title}`;
    lyricsArtist.textContent = data.artist;
    lyricsDescription.textContent = data.description;

    lyricsBody.innerHTML = data.lyrics
      .split("\n")
      .map((line) => `<p>${line}</p>`)
      .join("");
  });
});

document.querySelector(".like-btn").addEventListener("click", () => {
  alert("You liked this song ❤️");
});

document.querySelector(".dislike-btn").addEventListener("click", () => {
  alert("You disliked this song 💔");
});
