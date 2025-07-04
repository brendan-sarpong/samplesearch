// quiz.js
const questions = {
  easy: [
    {
      audio: "assets/audio/dr_dre.mp3",
      answer: "west",
      songTitle: "Still D.R.E.",
      artist: "Dr. Dre ft. Snoop Dogg",
      regionInfo: {
        west: "West Coast: Laid-back sound, G-funk synths, funk-based grooves, storytelling and smooth flows."
      }
    },
    {
      audio: "assets/audio/mobb_deep.mp3",
      answer: "east",
      songTitle: "Shook Ones Pt. II",
      artist: "Mobb Deep",
      regionInfo: {
        east: "East Coast: Aggressive beats, complex lyricism, boom bap, jazz/funk samples, legends like Nas, Biggie, and A Tribe Called Quest."
      }
    },
    {
      audio: "assets/audio/california_love.mp3",
      answer: "west",
      songTitle: "California Love",
      artist: "2Pac ft. Dr. Dre",
      regionInfo: {
        west: "West Coast: Laid-back sound, G-funk synths, funk-based grooves, storytelling and smooth flows."
      }
    },
    {
      audio: "assets/audio/sofreshsoclean.mp3",
      answer: "south",
      songTitle: "So Fresh, So Clean",
      artist: "OutKast",
      regionInfo: {
        south: "Southern: Trap beats, booming 808s, melodic flows, and innovative production from artists like Outkast, T.I., and Three 6 Mafia."
      }
    },
    {
      audio: "assets/audio/splittoes.mp3",
      answer: "east",
      songTitle: "Margiela Split Toes",
      artist: "Westside Gunn ft. Mach Hommy",
      regionInfo: {
        east: "East Coast: Aggressive beats, complex lyricism, boom bap, jazz/funk samples, legends like Nas, Biggie, and A Tribe Called Quest."
      }
    },
    {
      audio: "assets/audio/post eoy songs/The Pharcyde - Runnin' (Official Music Video) (easy, west coast).mp3",
      answer: "west",
      songTitle: "Runnin'",
      artist: "The Pharcyde",
      regionInfo: {
        west: "West Coast: Laid-back sound, G-funk synths, funk-based grooves, storytelling and smooth flows."
      }
    },
    {
      audio: "assets/audio/post eoy songs/De La Soul - Breakadawn (Official Music Video) [HD] (medium, east coast).mp3",
      answer: "east",
      songTitle: "Breakadawn",
      artist: "De La Soul",
      regionInfo: {
        east: "East Coast: Aggressive beats, complex lyricism, boom bap, jazz/funk samples, legends like Nas, Biggie, and A Tribe Called Quest."
      }
    },
    {
      audio: "assets/audio/post eoy songs/UGK ft. Outkast - Int'l Players Anthem (easy, south).mp3",
      answer: "south",
      songTitle: "Int'l Players Anthem",
      artist: "UGK ft. OutKast",
      regionInfo: {
        south: "Southern: Trap beats, booming 808s, melodic flows, and innovative production from artists like Outkast, T.I., and Three 6 Mafia."
      }
    },
    {
      audio: "assets/audio/post eoy songs/Rapsody - Power ft. Kendrick Lamar, Lance Skiiiwalker (medium, east coast).mp3",
      answer: "east",
      songTitle: "Power",
      artist: "Rapsody ft. Kendrick Lamar, Lance Skiiiwalker",
      regionInfo: {
        east: "East Coast: Aggressive beats, complex lyricism, boom bap, jazz/funk samples, legends like Nas, Biggie, and A Tribe Called Quest."
      }
    }
  ],
  medium: [
    {
      audio: "assets/audio/Young Thug - Digits (Clean).mp3",
      answer: "south",
      songTitle: "Digits",
      artist: "Young Thug",
      regionInfo: {
        south: "Southern: Trap beats, booming 808s, melodic flows, and innovative production from artists like Outkast, T.I., and Three 6 Mafia."
      }
    },
    {
      audio: "assets/audio/JID - Dance Now (Lyrics) Feat. Kenny Mason.mp3",
      answer: "south",
      songTitle: "Dance Now",
      artist: "JID ft. Kenny Mason",
      regionInfo: {
        south: "Southern: Trap beats, booming 808s, melodic flows, and innovative production from artists like Outkast, T.I., and Three 6 Mafia."
      }
    },
    {
      audio: "assets/audio/peekaboo - Kendrick Lamar, AzChike & Dody6 (Clean).mp3",
      answer: "west",
      songTitle: "Peekaboo",
      artist: "Kendrick Lamar, AzChike & Dody6",
      regionInfo: {
        west: "West Coast: Laid-back sound, G-funk synths, funk-based grooves, storytelling and smooth flows."
      }
    },
    {
      audio: "assets/audio/woesoftheworld.mp3",
      answer: "midwest",
      songTitle: "Woes of the World",
      artist: "Saba & No I.D.",
      regionInfo: {
        midwest: "Midwest: Technical rhyme schemes, fast flows, conscious lyrics, and soulful production from artists like Common, Kanye West, and Bone Thugs-n-Harmony."
      }
    },
    {
      audio: "assets/audio/Through The Wire.mp3",
      answer: "midwest",
      songTitle: "Through the Wire",
      artist: "Kanye West",
      regionInfo: {
        midwest: "Midwest: Technical rhyme schemes, fast flows, conscious lyrics, and soulful production from artists like Common, Kanye West, and Bone Thugs-n-Harmony."
      }
    },
    {
      audio: "assets/audio/Common - Be (Intro).mp3",
      answer: "midwest",
      songTitle: "Be (Intro)",
      artist: "Common",
      regionInfo: {
        midwest: "Midwest: Technical rhyme schemes, fast flows, conscious lyrics, and soulful production from artists like Common, Kanye West, and Bone Thugs-n-Harmony."
      }
    },
    {
      audio: "assets/audio/post eoy songs/Lauryn Hill - Doo Wop (That Thing) (medium, east coast).mp3",
      answer: "east",
      songTitle: "Doo Wop (That Thing)",
      artist: "Lauryn Hill",
      regionInfo: {
        east: "East Coast: Aggressive beats, complex lyricism, boom bap, jazz/funk samples, legends like Nas, Biggie, and A Tribe Called Quest."
      }
    },
    {
      audio: "assets/audio/post eoy songs/Wu-Tang Clan - Protect Ya Neck (medium, east coast).mp3",
      answer: "east",
      songTitle: "Protect Ya Neck",
      artist: "Wu-Tang Clan",
      regionInfo: {
        east: "East Coast: Aggressive beats, complex lyricism, boom bap, jazz/funk samples, legends like Nas, Biggie, and A Tribe Called Quest."
      }
    }
  ],
  hard: [
    {
      audio: "assets/audio/JPEGMAFIA - HAZARD DUTY PAY! (official audio).mp3",
      answer: "east",
      songTitle: "HAZARD DUTY PAY!",
      artist: "JPEGMAFIA",
      subregion: "experimental/alt",
      regionInfo: {
        east: "East Coast: Aggressive beats, complex lyricism, boom bap, jazz/funk samples, legends like Nas, Biggie, and A Tribe Called Quest."
      }
    },
    {
      audio: "assets/audio/post eoy songs/DJ JAYHOOD - HEARTBROKEN (hard, east coast, jersey club).mp3",
      answer: "east",
      songTitle: "HEARTBROKEN",
      artist: "DJ JAYHOOD",
      subregion: "jersey club",
      regionInfo: {
        east: "East Coast: Aggressive beats, complex lyricism, boom bap, jazz/funk samples, legends like Nas, Biggie, and A Tribe Called Quest."
      }
    },
    {
      audio: "assets/audio/post eoy songs/Danny Brown - Really Doe ft. Kendrick Lamar, Ab-Soul, Earl Sweatshirt (hard, midwest, trip-hop or alternative hiphop).mp3",
      answer: "midwest",
      songTitle: "Really Doe",
      artist: "Danny Brown ft. Kendrick Lamar, Ab-Soul, Earl Sweatshirt",
      subregion: "experimental rap/alt",
      regionInfo: {
        midwest: "Midwest: Technical rhyme schemes, fast flows, conscious lyrics, and soulful production from artists like Common, Kanye West, and Bone Thugs-n-Harmony."
      }
    },
    {
      audio: "assets/audio/post eoy songs/Shake Your Rump - beastie boys (medium, east coast, rap rock).mp3",
      answer: "east",
      songTitle: "Shake Your Rump",
      artist: "Beastie Boys",
      subregion: "rap rock",
      regionInfo: {
        east: "East Coast: Aggressive beats, complex lyricism, boom bap, jazz/funk samples, legends like Nas, Biggie, and A Tribe Called Quest."
      }
    },
    {
      audio: "assets/audio/stormzy_shutup.mp3",
      answer: "international",
      songTitle: "Shut Up",
      artist: "Stormzy",
      subregion: "grime",
      regionInfo: {
        international: "International: Global hip-hop scenes with unique regional flavors, from UK grime to French rap to Japanese hip-hop."
      }
    }
  ]
};

let current = 0;
let score = 0;
let difficulty = 'easy';

function setDifficulty(level) {
  difficulty = level;
  current = 0;
  score = 0;
  loadQuestion();
}

function loadQuestion() {
  const currentQuestions = questions[difficulty];
  const q = currentQuestions[current];
  const audio = document.getElementById('audio');
  if (audio) audio.src = q.audio;
  document.getElementById('feedback').textContent = '';
  document.getElementById('region-info').classList.add('hidden');
  document.getElementById('region-info').textContent = '';
  document.getElementById('song-info').classList.add('hidden');
  document.getElementById('song-info').textContent = '';
  document.getElementById('score').textContent = `Score: ${score}/${currentQuestions.length}`;
  document.getElementById('question-count').textContent = `Song ${current + 1} of ${currentQuestions.length}`;
  
  // Handle subregion input for hard mode
  if (difficulty === 'hard') {
    const subregionInput = document.getElementById('subregion-input');
    const subregionInfo = document.getElementById('subregion-info');
    if (subregionInput) {
      subregionInput.classList.add('hidden');
      // Clear the input field
      const inputField = subregionInput.querySelector('input[type="text"]');
      if (inputField) {
        inputField.value = '';
      }
    }
    if (subregionInfo) {
      subregionInfo.classList.add('hidden');
      subregionInfo.textContent = '';
    }
  }
  
  // Show/hide next button based on whether an answer has been selected
  const nextButton = document.getElementById('next-button');
  if (nextButton) {
    nextButton.classList.add('hidden');
  }
}

function checkAnswer(choice) {
  const currentQuestions = questions[difficulty];
  const q = currentQuestions[current];
  const feedback = document.getElementById('feedback');
  const info = document.getElementById('region-info');
  const songInfo = document.getElementById('song-info');
  const nextButton = document.getElementById('next-button');
  
  if (choice === q.answer) {
    feedback.textContent = '✅ Correct!';
    feedback.className = 'text-green-600 font-bold bounce-in';
    score++;
    
    // Show song information for correct answers
    songInfo.innerHTML = `<strong>Song:</strong> ${q.songTitle} by ${q.artist}`;
    songInfo.className = 'mt-2 text-primary text-lg slide-in-up';
    songInfo.classList.remove('hidden');

    // For hard mode, show subregion input instead of subregion info
    if (difficulty === 'hard' && q.subregion) {
      const subregionInput = document.getElementById('subregion-input');
      if (subregionInput) {
        subregionInput.classList.remove('hidden');
      }
      const subregionInfo = document.getElementById('subregion-info');
      if (subregionInfo) {
        subregionInfo.classList.add('hidden');
        subregionInfo.textContent = '';
      }
    }
  } else {
    feedback.textContent = `❌ Wrong! That was a(n) ${q.answer.charAt(0).toUpperCase() + q.answer.slice(1)} beat.`;
    feedback.className = 'text-red-600 font-bold bounce-in';
    
    // Show song information for wrong answers
    songInfo.innerHTML = `<strong>Song:</strong> ${q.songTitle} by ${q.artist}`;
    songInfo.className = 'mt-2 text-primary text-lg slide-in-up';
    songInfo.classList.remove('hidden');
    
    // For hard mode, show subregion input instead of subregion info
    if (difficulty === 'hard' && q.subregion) {
      const subregionInput = document.getElementById('subregion-input');
      if (subregionInput) {
        subregionInput.classList.remove('hidden');
      }
      const subregionInfo = document.getElementById('subregion-info');
      if (subregionInfo) {
        subregionInfo.classList.add('hidden');
        subregionInfo.textContent = '';
      }
    } else {
      // Show region info for non-hard modes
      info.textContent = q.regionInfo[q.answer];
      info.className = 'mt-4 text-left region-info-bg shadow p-4 rounded-lg text-primary slide-in-up';
      info.classList.remove('hidden');
    }
  }
  
  document.getElementById('score').textContent = `Score: ${score}/${currentQuestions.length}`;
  nextButton.classList.remove('hidden');
  nextButton.className = 'btn-primary font-bold py-3 px-8 rounded-full shadow-lg text-xl mt-6 slide-in-up';
}

function nextQuestion() {
  const currentQuestions = questions[difficulty];
  current++;
  
  if (current < currentQuestions.length) {
    loadQuestion();
  } else {
    const minRequired = Math.ceil(currentQuestions.length / 2);
    const nextLevel = {
      'easy': 'medium',
      'medium': 'hard',
      'hard': null
    };
    
    let gameOverHTML = `
      <h2 class='text-2xl font-bold text-accent'>Game Over!</h2>
      <p class='text-lg mt-2'>Final Score: ${score}/${currentQuestions.length}</p>
      <div class="mt-6 space-y-4">
        <button onclick="window.location.reload()" class="w-full btn-primary font-bold py-3 px-6 rounded-lg">
          Play Again
        </button>
        <a href="regions.html" class="block w-full bg-[var(--secondary-color)] hover:bg-[var(--accent-color)] text-primary font-bold py-3 px-6 rounded-lg text-center">
          Review Regions
        </a>
    `;
    
    if (score >= minRequired && nextLevel[difficulty]) {
      gameOverHTML += `
        <a href="game-${nextLevel[difficulty]}.html" class="block w-full btn-primary font-bold py-3 px-6 rounded-lg text-center">
          Move to ${nextLevel[difficulty].charAt(0).toUpperCase() + nextLevel[difficulty].slice(1)} Level
        </a>
      `;
    }
    
    gameOverHTML += '</div>';
    document.getElementById('quiz-area').innerHTML = gameOverHTML;
  }
}

function checkSubregion() {
  if (difficulty !== 'hard') return;
  
  const currentQuestions = questions[difficulty];
  const q = currentQuestions[current];
  const subregionInput = document.getElementById('subregion-input');
  const subregionInfo = document.getElementById('subregion-info');
  
  if (!subregionInput || !q.subregion) return;
  
  // Get the actual input field value
  const inputField = subregionInput.querySelector('input[type="text"]');
  if (!inputField) return;
  
  const userGuess = inputField.value.toLowerCase().trim();
  const correctSubregion = q.subregion.toLowerCase();
  
  // Define alternative acceptable answers for each subregion
  const alternativeAnswers = {
    'jersey club': ['jersey', 'club'],
    'chicago': ['chi', 'chitown'],
    'trip-hop': ['triphop', 'trip hop', 'alternative hiphop', 'alternative hip hop'],
    'houston': ['h-town', 'htown'],
    'north carolina': ['nc', 'carolina'],
    'new jersey': ['nj', 'jersey'],
    'staten island': ['si', 'staten'],
    'rap rock': ['rap-rock', 'rock rap'],
    'la underground': ['la', 'los angeles', 'underground'],
    'long island': ['li', 'long island'],
    'experimental': ['experimental rap', 'experimental hip hop', 'experimental hiphop'],
    'experimental rap': ['experimental', 'experimental hip hop', 'experimental hiphop'],
    'grime': ['uk grime', 'british grime']
  };
  
  const alternatives = alternativeAnswers[correctSubregion] || [];
  const isCorrect = userGuess === correctSubregion || alternatives.includes(userGuess);
  
  if (isCorrect) {
    subregionInfo.innerHTML = `<strong>Subregion/Subgenre:</strong> ${q.subregion} ✅ Correct!`;
    subregionInfo.className = 'mt-2 text-green-600 text-lg slide-in-up';
  } else {
    subregionInfo.innerHTML = `<strong>Subregion/Subgenre:</strong> ${q.subregion}`;
    subregionInfo.className = 'mt-2 text-white text-lg slide-in-up';
  }
  
  subregionInfo.classList.remove('hidden');
  subregionInput.classList.add('hidden');
}

window.onload = function() {
  // Set difficulty based on current page
  const path = window.location.pathname;
  if (path.includes('medium')) {
    setDifficulty('medium');
  } else if (path.includes('hard')) {
    setDifficulty('hard');
  } else {
    setDifficulty('easy');
  }
};
