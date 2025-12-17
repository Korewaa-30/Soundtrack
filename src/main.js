document.addEventListener("DOMContentLoaded", () => {
  // ===== NAV AUDIO (INDEX ONLY) =====
  const navPlayBtn = document.getElementById("playMelodyBtn");
  const navAudio = document.getElementById("melodyAudio");

  // ===== PLAYLIST AUDIO (ALL PAGES) =====
  const playlistAudio = document.getElementById("globalAudio");
  const songs = Array.from(document.querySelectorAll(".song-item"));

  let currentIndex = -1;

  // ================= NAV PLAY BUTTON =================
  if (navPlayBtn && navAudio) {
    navPlayBtn.addEventListener("click", (e) => {
      e.preventDefault();

      // Stop playlist audio if playing
      if (playlistAudio && !playlistAudio.paused) {
        playlistAudio.pause();
        playlistAudio.currentTime = 0;
        resetPlaylistUI();
        currentIndex = -1;
      }

      // Toggle nav audio
      navAudio.paused ? navAudio.play().catch(console.error) : navAudio.pause();
    });
  }

  // ================= PLAYLIST SONG CLICK =================
  songs.forEach((song, index) => {
    song.addEventListener("click", () => {
      const src = song.dataset.src;
      if (!src || !playlistAudio) return;

      const icon = song.querySelector(".play-icon i");
      const title = song.querySelector(".song-title");

      // Stop nav audio if playing
      if (navAudio && !navAudio.paused) {
        navAudio.pause();
        navAudio.currentTime = 0;
      }

      // Same song → toggle pause
      if (currentIndex === index && !playlistAudio.paused) {
        playlistAudio.pause();
        icon.className = "fas fa-play";
        title.classList.remove("playing");
        return;
      }

      playSong(index);
    });
  });

  // ================= AUTO-PLAY NEXT SONG =================
  if (playlistAudio) {
    playlistAudio.addEventListener("ended", () => {
      const nextIndex = currentIndex + 1;

      if (nextIndex < songs.length) {
        playSong(nextIndex);
      } else {
        // End of playlist
        resetPlaylistUI();
        currentIndex = -1;
      }
    });
  }

  // ================= HELPERS =================
  function playSong(index) {
    if (!songs[index] || !playlistAudio) return;

    resetPlaylistUI();

    const song = songs[index];
    const src = song.dataset.src;
    const icon = song.querySelector(".play-icon i");
    const title = song.querySelector(".song-title");

    playlistAudio.src = src;
    playlistAudio.play().catch(console.error);

    icon.className = "fas fa-pause";
    title.classList.add("playing");

    currentIndex = index;
  }

  function resetPlaylistUI() {
    songs.forEach((s) => {
      const i = s.querySelector(".play-icon i");
      const t = s.querySelector(".song-title");

      if (i) i.className = "fas fa-play";
      if (t) t.classList.remove("playing");
    });
  }
});

/* song lyrics*/
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
Hear the sound of heaven
Like the sound of many waters
It's the sound of worship
Coming from the throne
Cries of adoration
As men from every nation
Lift their voice
To make His glory known

[Chorus]
Singing holy holy holy are You Lord
Holy holy holy are You Lord
The elders and angels bow
The redeemed worship You now
Holy holy holy are You Lord
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
  "09": {
    title: "Alpha & Omega",
    artist: "Jesus Image",
    description: "A declaration of God's unmatched infinite existence.",
    lyrics: `
You are Alpha and Omega We worship You our Lord
You are worthy to be praised

You are Alpha and Omega We worship You our Lord
You are worthy to be praised

We give You all the glory, We worship You our Lord
You are worthy to be praised

We give You all the glory, We worship You our Lord
You are worthy to be praised
    `,
  },
  10: {
    title: "Oh The Glory of His Presence",
    artist: "Jesus Image",
    description: "A declaration of God's unmatched Glory.",
    lyrics: `
[Verse 1]
Jesus, all-glorious
Prepare in us Your temple
We're called as living stones
Where You're enthroned

[Verse 2]
And as You rose from death in power
So rise within our worship
Rise upon our praise
And let the hand that saw You raised
Clothe us in Your glory
And draw us by Your grace

[Chorus]
Oh, the glory of Your presence
We Your temple give You reverence
So arise to Your rest
And be blessed by our praisе
And as we glory in Your embrace
And as Your prеsence now fills this place
    `,
  },
  11: {
    title: "How Great Thou Art",
    artist: "Jesus Image",
    description: "A declaration of God's unmatched greatness.",
    lyrics: `
Verse

O Lord my God
When I in awesome wonder
Consider all the worlds Thy hands have made
I see the stars
I hear the rolling thunder
Thy power throughout the universe displayed

Chorus

Then sings my soul
My Savior God to Thee
How great Thou art
How great Thou art
Then sings my soul
My Savior God to Thee
How great Thou art
How great Thou art

Verse

O Lord my God
When I in awesome wonder
Consider all the worlds Thy hands have made
I see the stars
I hear the rolling thunder
Thy power throughout the universe displayed

Chorus

Then sings my soul
My Savior God to Thee
How great Thou art
How great Thou art
Then sings my soul
My Savior God to Thee
How great Thou art
How great Thou art

Tag

How great Thou art
How great Thou art

Chorus

Then sings my soul
My Savior God to Thee
How great Thou art
How great Thou art
Then sings my soul
My Savior God to Thee
How great Thou art
How great Thou art
    `,
  },
  12: {
    title: "Goodness of God",
    artist: "CeCe Winans",
    description: "A declaration of God's unmatched goodness.",
    lyrics: `
I love You, Lord
For Your mercy never fails me
All my days, I've been held in Your hands
From the moment that I wake up
Until I lay my head
Oh, I will sing of the goodness of God
'Cause all my life You have been faithful
And all my life You have been so, so good
With every breath that I am able
Oh, I will sing of the goodness of God
I love Your voice
You have led me through the fire
In darkest night You are close like no other
I've known You as a Father
I've known You as a Friend
And I have lived in the goodness of God, yeah
'Cause all my life You have been faithful, oh yes You have
And all my life You have been so, so good
With every breath that I am able
Oh, I will sing of the goodness of God
Your goodness is running after, it's running after me
Your goodness is running after, it's running after me
With my life laid down, I surrendered now
I give You everything, oh Lord
Your goodness is running after, it's running after me
Your goodness is running after, it's running after me (oh yeah, oh yeah)
Your goodness is running after, it's running after me
With my life laid down, I surrendered now
I give You everything
Your goodness is running after, it keeps running after me
And all my life You have been faithful
And all my life You have been so, so good
With every breath that I am able
Oh, I'm gonna sing of the goodness of God
I'm gonna sing
All my life You have been faithful
(All of my life You've been faithful)
All my life You have been so, so good
(So good with every breath)
every breath that I am able
(Every breath I'm able)
I will sing (I'm gonna sing)
Of the goodness (of the goodness of God, yes I am)
I'm gonna sing of the goodness of God
Oh, I'm gonna sing of the goodness of God
    `,
  },
  13: {
    title: "Worthy of it All",
    artist: "CeCe Winans",
    description: "A declaration of God's unmatched worth.",
    lyrics: `
All the saints and angels
They bow before Your throne
All the elders cast their crowns
Before the Lamb of God and sing
You are worthy of it all
You are worthy of it all
For from You are all things
And to You are all things
You deserve the glory
All the saints and angels
Bow before Your throne
All the elders cast their crowns
Before the Lamb of God and sing
You are worthy of it all
You are worthy of it all
For from You are all things
And to You are all things
You deserve the glory
You are worthy, You are worthy
(You are worthy of it all)
You are worthy of it all
You are worthy of it all
For from You are all things
And to You are all things
You deserve the glory
Lord, You're worthy
From the rising of the sun to the going down of the Sun
Day and night, night and day, let incense arise
Day and night, night and day, let incense arise
Day and night, night and day, let incense arise
Day and night, night and day, let incense arise
Come on (day and night) cry out (night and day, let incense arise) You're holy
Day and night, night and day, let incense arise
Day and night, night and day, let incense arise
Day and night, night and day
You are worthy of it all
You are worthy of it all, Jesus
For from You are all things
And to You are all things
You deserve the glory
You are worthy, You are worthy
, yes, You are
(You are worthy of it all), we owe everything to You, yes, we do
(For from You are all things), from You are all things
And to You are all things
You deserve the glory    `,
  },
  14: {
    title: "King of Glory",
    artist: "CeCe Winans",
    description: "A declaration of God's unmatched Glory.",
    lyrics: `
Yes the world
Will bow down and say You are God
Every man
Will bow down and say You are King
So let's start right now
Why would we wait?
King of glory fill this place
I just wanna be with You, I just wanna be with You
King of glory fill this place
I just wanna be with You, I just wanna be with You
Yes the world
Will bow down and say You are God
Every man
Will bow down and say You are King
So let's start right now
Why would we wait?
We can praise You now
In victory
King of glory fill this place
We just wanna be with You, we just wanna be with You
King of glory fill this place
We just wanna be with You, we just wanna be with You
So we'll sing Hallelujah
Until You come again
And we'll dance in Your presence
Until You come again
I'll just sing Hallelujah
Until You come again
And I'll dance in Your presence
Until You come again
We will sing Hallelujah
Until You come again
Yes, we'll dance in Your presence
Until You come again
We will sing Hallelujah
Until You come again
Yes, we'll dance in Your presence (Dance in Your presence)
Dance in Your presence (Dance in Your presence)
Dance in Your presence (Dance in Your presence)
Dance in Your presence
King of glory fill this place
We just wanna be with You, we just wanna be with You
King of glory fill this place
We just wanna be with You, we just wanna be with You
King of glory fill this place
Just wanna be with you, just wanna be with you
King of glory fill this place
Just wanna be with you, just wanna be with you
I just want you, I just want you
I just want you, I just want you
I just want you, I just want you
Nobody else will do
King of glory fill this place
Just wanna be with you, just wanna be with you
    `,
  },
  15: {
    title: "Let go, Let God",
    artist: "Xania Monet",
    description: "A reminder that we can do so much, not all",
    lyrics: `
You've been losing sleep, crying in the dark
Tryna hold the weight of a broken heart
You smile for the world, but inside, it's pain
You pray, but feel like nothing's changed
You tryna fix it, tryna stay strong
But some battles ain't yours to fight alone
You've done all you can, now here's the key
Peace starts when you set it free
Let go, let God, He already knows
Every tear, every burden, every low
You were meant to break just to prove you tried
Some storms are only His to fight
It ain't worth your peace, it ain't worth your tears
You don't have to carry what He's willing to clear
Take your hands off, let Him do His part
Let go and let God
You keep blaming yourself for what you couldn't change
Keep rehearsing the past, reliving the pain
But healing don't come from holding on tight
Sometimes strength is knowing when to surrender the fight
It's okay to fall, it's okay to rest
It's okay to say, "Lord, I did my best"
Now watch how He moves when you step aside
Sometimes your silence gives Him room to provide
Let go, let God, give Him control
It ain't your job to carry every soul
You weren't built to bleed for every scar
Some things are only healed by who God is, not who you are
It ain't worth your joy, it ain't worth the stress
You deserve peace, you deserve rest
So lift your hands up and soften your heart
Let go and let God, oh
You prayed for answers, this is one
Letting go don't mean you gave up
It means you gave it over, you finally trusted that He got you
Now breathe
Let it be
Let go, let God, He never fails
Even when life feels like hell
You don't need to care, it was crushing your soul
You just need to trust and let it go
Your peace is sacred, your heart deserves light
And joy don't have to come with a fight
So walk away, even if it's hard
Let go and let God
    `,
  },
  16: {
    title: "Your time is coming",
    artist: "Xania Monet",
    description: "A reminder that all is not lost.",
    lyrics: `
You've been putting in work when nobody sees
Planting seeds in silence, watering dreams
Smiling through pain, still showing up
Even when life keep calling your bluff
They don't know what it costs you to stay in the race
The prayers you whispered with tears on your face
But you never folded, never sat still
That kind of faith gonna break through for real
Your time coming, I feel it in the wind
All that grind, all that pain about to turn to wins
Every "no" you heard, God gon' flip to "yes"
Every closed door was just a divine test
So keep going hard, don't slow down yet
You ain't worked this long just to have regrets
You about to rise like you always knew
Your time coming
It's overdue, hm
Hm, mm, mm, mm
Hm
You kept showing love even when they switched
Kept walking light when life got dark quick
You poured into others while running on E
But baby, breakthrough coming, just wait and see
You ain't crazy, you chosen (chosen)
God saw the night you were broken (broken)
He kept receipts on every try
And he gon' bless you right on time
Your time coming, stay in position
The table's turning in your favor, no permission
They gon' act like they always knew
But only you and God knew what you've been through
So chin up, don't let the pressure lie (pressure lie)
Time is formed when you don't quit the fight (quit the fight)
It's closer than it's ever been for you
Your time coming (time coming)
Let her move, yeah
You ain't invisible, you just being built
Every scar, every tear is strength, not guilt (not guilt)
It's your reason to shine, your name in lights
You paid your dues, now claim your rights
Your time coming, believe that truth
Everything they said you couldn't do gon' come through
So don't hold back, don't lose hope
This the moment God gon' help you float
From pressure to power, from silence to loud
From overlooked to making Him proud
Keep showing up, you already grew
Your time coming
And it's due
    `,
  },
  17: {
    title: "The strong don't get a break",
    artist: "Xania Monet",
    description: "A song reminding us to take a break.",
    lyrics: `
They always say you got this
But who got you?
You're the one they call when the world falls down
The shoulder, the calm, the safest sound
You show up with strength when the room's full of fear
But when you need help, ain't nobody near
You smile through storms, stay quiet through pain
Never let 'em see you buckle under the strain
You laugh when your chest's heavy, tears on mute
Giving life to everybody, but who waters you
Who checks on the strong ones?
The ones that smile when they're breaking apart
Who hears the tears that fall in the dark
Who hugs the backbone of the home
The ones who heal but feel alone
Strong don't mean unshaken
It means we mastered faking
Check on us, we're tired too
Behind the strength, we're human too, mm-mm
You pour out peace like an endless cup
Even when your own world's roughin' up
You pray for them, show love on time
But no one notices you're losing your mind
You help them heal, help them cope
Speak life when you can't find hope
But who sits with you when the silence screams?
When you're drowning slow in broken dreams
To the man who's tired but scared to say it
To the woman who loved but don't feel it reciprocated
To the kid who had to grow up too fast
To the one whose peace never seems to last
This world expects so much from you
But forgets to ask if you're good too
You don't always have to be the flame
You're allowed to fall, to feel, to name your pain
So if you're tired, let go tonight
You don't gotta hold the light
I see you, I really do
And if no one's asked, how are you?
Who checks on the strong ones?
Who sees the weight you silently lift?
You give the world your heart and hands
But you deserve love, not just demands
So here's your moment, breathe, release
Let the tears fall, let your soul find peace
You ain't a burden, you ain't too much
Even warriors need a healing touch
You're not alone, even if it feels that way
You matter more than what you give away
So rest your heart, take off the crown
You don't have to carry everyone now, ah, ooh
This one's for you
The strong one's roll
    `,
  },
  18: {
    title: "Hero",
    artist: "Mariah Carey",
    description: "You are your own hero.",
    lyrics: `
[Verse 1]
There's a hero
If you look inside your heart
You don't have to be afraid
Of what you are
There’s an answer
If you reach into your soul
And the sorrow that you know
Will melt away

[Chorus]
And then a hero comes along
With the strength to carry on
And you cast your fears aside
And you know you can survive
So when you feel like hope is gone
Look inside you and be strong
And you'll finally see the truth
That a hero lies in you
[Verse 2]
It's a long road
When you face the world alone
No one reaches out a hand for you to hold
You can find love
If you search within yourself
And the emptiness you felt
Will disappear

[Chorus]
And then a hero comes along
With the strength to carry on
And you cast your fears aside
And you know you can survive
So when you feel like hope is gone
Look inside you and be strong
And you'll finally see the truth
That a hero lies in you

[Bridge]
Lord knows
Dreams are hard to follow
But don't let anyone
Tear them away
Hold on
There will be tomorrow
In time
You'll find the way
[Chorus]
And then a hero comes along
With the strength to carry on
And you cast your fears aside
And you know you can survive
So when you feel like hope is gone
Look inside you and be strong
And you'll finally see the truth
That a hero lies in you

[Outro]
That a hero lies in you
That a hero lies in you
    `,
  },
  19: {
    title: "I look to You",
    artist: "Whitney Housten",
    description: "A song reminding us there is help",
    lyrics: `
As I lay me down
Heaven hear me now
I'm lost without a cause
After giving it my all
Winter storms have come
And darkened my sun
After all that I've been through
Who on earth can I turn to?

[Chorus]
I look to you
I look to you
After all my strength is gone
In you, I can be strong
I look to you
I look to you, yeah
And when melodies are gone
In you, I hear a song
I look to you

[Verse 2]
About to lose my breath
There's no more fighting left
Sinking to rise no more
Searching for that open door
And every road that I've taken, mm
Led to my regret
And I don't know if I'm gon' make it
Nothing to do but lift my head

[Chorus]
I look to you
I look to you, yeah
And when all my strength is gone
In you, I can be strong
I look to you
I look to you, oh yeah
And when melodies are gone
In you, I hear a song
I look to you

[Bridge]
My levees are broken (Oh Lord)
My walls have come (Coming down on me)
They're crumbling down on me (All the rain is falling)
The rain is falling (Woo)
Defeat is calling (Set me free)
I need you to set me free
Take me far away from the battle
I need you
Shine on me

[Chorus]
I look to you
I look to you
After all my strength is gone
In you, I can be strong
I look to you
I look to you, yeah
And when melodies are gone
In you, I hear a song
I look to you, yeah
    `,
  },
  20: {
    title: "When you Believe",
    artist: "Whitney Housten & Mariah Carey",
    description: "A song reminding us everything starts with believe",
    lyrics: `
[Verse 1: Whitney Houston]
Many nights we've prayed
With no proof anyone could hear
In our hearts a hopeful song
We barely understood
Now we are not afraid
Although we know there's much to fear
We were moving mountains
Long before we knew we could
Oh yes

[Chorus: Whitney Houston & Mariah Carey]
There can be miracles
When you believe
Though hope is frail
It's hard to kill
Who knows what miracles
You can achieve
When you believe
Somehow you will
You will when you believe
Oh (Mmm, yeah)

[Verse 2: Mariah Carey]
In this time of fear
When prayer so often proves in vain
Hope seems like the summer birds
Too swiftly flown away
Yet now I'm standing here
My heart's so full, I can't explain
Seeking faith and speaking words
I never thought I'd say
[Chorus: Mariah Carey & (Whitney Houston), Both]
There can be miracles
When you believe
(When you believe)
Though hope is frail
It's hard to kill (Mmm)
Who knows what miracles
You can achieve (You can achieve)
When you believe
Somehow you will
You will when you believe

[Bridge: Both, Whitney Houston, Mariah Carey]
They don't always happen when you ask, uh
And it's easy to give in to your fears, oh (Oh)
But when you're blinded by your pain
Can't see your way clear through the rain
A small, but still, resilient voice
Says help is very near, oh

[Chorus: Both]
There can be miracles (Miracles)
When you believe (Oh, when you believe)
Though hope is frail
It's hard to kill (Hard to kill, oh yeah)
Who knows what miracles
You can achieve (You can achieve, oh)
When you believe
Somehow you will (Somehow, somehow, somehow)
Now you will
You will when you, when you believe, oh

[Outro: Both, (Mariah Carey)]
You will when you believe
You will when you believe
Just believe (You will, you will)
Just believe
You will when you believe
    `,
  },
  21: {
    title: "I have Nothing",
    artist: "Whitney Housten",
    description: "A song for our own worth.",
    lyrics: `
[Verse 1]
Share my life, take me for what I am
'Cause I'll never change all my colors for you
Take my love, I'll never ask for too much
Just all that you are and everything that you do

[Pre-Chorus]
I don't really need to look very much further
I don't wanna have to go where you don't follow
I won't hold it back again, this passion inside
Can't run from myself, there's nowhere to hide

[Chorus]
But don't make me close one more door
I don't wanna hurt anymore
Stay in my arms if you dare
Or must I imagine you there?
Don't walk away from me
I have nothing, nothing, nothing
If I don't have you, you, you, you, you

[Verse 2]
You see through, right to the heart of me
You break down my walls with the strength of your love, mm
I never knew love like I've known it with you
Will our memories survive? One I can hold on to
[Pre-Chorus]
I don't really need to look very much further
I don't wanna have to go where you don't follow
I won't hold it back again, this passion inside
I can't run from myself, there's nowhere to hide
Your love, I'll remember forever

[Chorus]
But don't make me close one more door
I don't wanna hurt anymore
Stay in my arms if you dare
Or must I imagine you there?
Don't walk away from me
I have nothing, nothing, nothing
Don't make me close one more door
I don't wanna hurt anymore
Stay in my arms if you dare
Or must I imagine you there?
Don't walk away from me, no
Don't walk away from me
Don't you dare walk away from me
I have nothing, nothing, nothing
If I don't have you

[Outro]
You
If I don't have you
Oh, you
    `,
  },
  22: {
    title: "I will Always Love You",
    artist: "Whitney Housten",
    description: "Letting someone go isn't hatred.",
    lyrics: `
[Verse 1]
If I should stay
I would only be in your way
So I'll go, but I know
I'll think of you every step of the way

[Chorus]
And I
Will always love you
I will always love you

[Post-Chorus]
You
My darling, you
Mm, mm

[Verse 2]
Bittersweet memories
That is all I'm taking with me
So goodbye, please, don't cry
We both know I'm not what you, you need

[Chorus]
And I
Will always love you
I will always love you
[Verse 3]
I hope life treats you kind
And I hope you have all you've dreamed of
And I wish to you joy and happiness
But above all this, I wish you love

[Chorus]
And I will always love you
I will always love you
I will always love you
I will always love you
I will always love you
I, I will always love you, you

[Outro]
Darling, I love you
Ooh, I'll always
I'll always love you
    `,
  },
  23: {
    title: "Love takes time",
    artist: "Mariah Carey",
    description:
      "A song reminding us to be self-aware of love and relationship.",
    lyrics: `
[Verse 1]
I had it all
But I let it slip away
Couldn't see I treated you wrong
Now I wander around
Feeling down and cold
Trying to believe that you're gone

[Chorus]
Love takes time
To heal when you're hurting so much
Couldn't see that I was blind
To let you go
I can't escape the pain
Inside
'Cause love takes time
I don't wanna be here
I don't wanna be here alone

[Verse 2]
Losing my mind
From this hollow in my heart
Suddenly I'm so incomplete
Lord I'm need you now
Tell me how to stop the rain
Tears are falling down endlessly

[Chorus]
Love takes time
To heal when you're hurting so much
Couldn't see that I was blind
To let you go
I can't escape the pain
Inside
'Cause love takes time
I don't wanna be here
I don't wanna be here alone

[Bridge]
You might say that it's over
You might say that you don't care
You might say you don't miss me
You don't need me
But I know that you do and I feel that you do
Inside

[Chorus]
Love takes time
To heal when you're hurting so much
Couldn't see that I was so blind
To let you go
I can't escape the pain
Inside
'Cause love takes time
I don't wanna be there
I don't wanna be there alone
    `,
  },
  24: {
    title: "Unbreak my heart",
    artist: "Toni Braxton",
    description: "A song of heartbreak.",
    lyrics: `
[Verse 1]
Don't leave me in all this pain
Don't leave me out in the rain
Come back and bring back my smile
Come and take these tears away
I need your arms to hold me now
The nights are so unkind
Bring back those nights when I held you beside me

[Chorus]
Un-break my heart
Say you'll love me again
Undo this hurt you caused
When you walked out the door
And walked out of my life
Un-cry these tears
I cried so many nights
Un-break my heart
My heart

[Verse 2]
Take back that sad word goodbye
Bring back the joy to my life
Don't leave me here with these tears
Come and kiss this pain away
I can't forget the day you left
Time is so unkind
And life is so cruel without you here beside me

[Chorus]
Un-break my heart
Say you'll love me again
Undo this hurt you caused
When you walked out the door
And walked out of my life
Un-cry these tears
I cried so many nights
Un-break my heart
Oh-oh-oh, ooh!

[Bridge]
Don't leave me in all this pain
Don't leave me out in the rain
Bring back the nights when I held you beside me

[Chorus]
Ooh, un-break my heart
Say you'll love me again
Undo this hurt you caused
When you walked out the door
And walked out of my life
Un-cry these tears
I cried so many, many nights
Ooh, un-break my
Un-break my heart, oh, baby
Come back and say you love me
Un-break my heart, sweet darlin'
Without you, I just can't go on

[Outro]
Say that you love me, say that you love me, tell me you love me
Un-break my- (Can't go on)
Say that you love me, say that you love me, tell me you love me
Un-break my-
Say that you love me, say that you love me, tell me you love me
Un-break my-
Say that you love me, say that you love me, tell me you love me
Un-break my-
    `,
  },
};

const lyricsPanel = document.getElementById("lyricsPanel");

if (lyricsPanel) {
  const lyricsTitle = lyricsPanel.querySelector(".song-title");
  const lyricsArtist = lyricsPanel.querySelector(".song-artist");
  const lyricsDescription = lyricsPanel.querySelector(".song-description");
  const lyricsBody = lyricsPanel.querySelector(".lyrics-body");

  const songs = document.querySelectorAll(".song-item");

  songs.forEach((song) => {
    song.addEventListener("click", () => {
      let key = song.dataset.key;

      if (!key) return;

      key = key.toString().padStart(2, "0");

      const data = songDetails[key];

      // ===== LYRICS NOT AVAILABLE =====
      if (!data) {
        lyricsTitle.textContent = "Lyrics not available";
        lyricsArtist.textContent = "";
        lyricsDescription.textContent = "";
        lyricsBody.innerHTML = "<p class='text-muted'>No lyrics yet.</p>";
        return;
      }

      // ===== SHOW LYRICS =====
      lyricsTitle.textContent = `${key}. ${data.title}`;
      lyricsArtist.textContent = data.artist;
      lyricsDescription.textContent = data.description;

      lyricsBody.innerHTML = data.lyrics
        .trim()
        .split("\n")
        .map((line) => `<p>${line}</p>`)
        .join("");
    });
  });
}

document.querySelector(".like-btn").addEventListener("click", () => {
  alert("You liked this song ❤️");
});

document.querySelector(".dislike-btn").addEventListener("click", () => {
  alert("You disliked this song 💔");
});
