// quiz.js
const questions = {
  easy: [
    {
      audio: "assets/audio/dr_dre.mp3",
      answer: "west",
      regionInfo: {
        west: "West Coast: Laid-back sound, G-funk synths, funk-based grooves, storytelling and smooth flows."
      }
    },
    {
      audio: "assets/audio/mobb_deep.mp3",
      answer: "east",
      regionInfo: {
        east: "East Coast: Aggressive beats, complex lyricism, boom bap, jazz/funk samples, legends like Nas, Biggie, and A Tribe Called Quest."
      }
    },
    {
      audio: "assets/audio/california_love.mp3",
      answer: "west",
      regionInfo: {
        west: "West Coast: Laid-back sound, G-funk synths, funk-based grooves, storytelling and smooth flows."
      }
    },
    {
      audio: "assets/audio/sofreshsoclean.mp3",
      answer: "south",
      regionInfo: {
        south: "Southern: Trap beats, booming 808s, melodic flows, and innovative production from artists like Outkast, T.I., and Three 6 Mafia."
      }
    },
    {
      audio: "assets/audio/woesoftheworld.mp3",
      answer: "midwest",
      regionInfo: {
        midwest: "Midwest: Technical rhyme schemes, fast flows, conscious lyrics, and soulful production from artists like Common, Kanye West, and Bone Thugs-n-Harmony."
      }
    },
    {
      audio: "assets/audio/splittoes.mp3",
      answer: "east",
      regionInfo: {
        east: "East Coast: Aggressive beats, complex lyricism, boom bap, jazz/funk samples, legends like Nas, Biggie, and A Tribe Called Quest."
      }
    }
  ],
  medium: [
    {
      audio: "assets/audio/Young Thug - Digits (Clean).mp3",
      answer: "south",
      regionInfo: {
        south: "Southern: Trap beats, booming 808s, melodic flows, and innovative production from artists like Outkast, T.I., and Three 6 Mafia."
      }
    },
    {
      audio: "assets/audio/JID - Dance Now (Lyrics) Feat. Kenny Mason.mp3",
      answer: "south",
      regionInfo: {
        south: "Southern: Trap beats, booming 808s, melodic flows, and innovative production from artists like Outkast, T.I., and Three 6 Mafia."
      }
    },
    {
      audio: "assets/audio/peekaboo - Kendrick Lamar, AzChike & Dody6 (Clean).mp3",
      answer: "west",
      regionInfo: {
        west: "West Coast: Laid-back sound, G-funk synths, funk-based grooves, storytelling and smooth flows."
      }
    }
  ],
  hard: [
    {
      audio: "assets/audio/JPEGMAFIA - HAZARD DUTY PAY! (official audio).mp3",
      answer: "east",
      regionInfo: {
        east: "East Coast: Aggressive beats, complex lyricism, boom bap, jazz/funk samples, legends like Nas, Biggie, and A Tribe Called Quest."
      }
    },
    {
      audio: "assets/audio/Through The Wire.mp3",
      answer: "midwest",
      regionInfo: {
        midwest: "Midwest: Technical rhyme schemes, fast flows, conscious lyrics, and soulful production from artists like Common, Kanye West, and Bone Thugs-n-Harmony."
      }
    },
    {
      audio: "assets/audio/Common - Be (Intro).mp3",
      answer: "midwest",
      regionInfo: {
        midwest: "Midwest: Technical rhyme schemes, fast flows, conscious lyrics, and soulful production from artists like Common, Kanye West, and Bone Thugs-n-Harmony."
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
  document.getElementById('score').textContent = `Score: ${score}/${currentQuestions.length}`;
  document.getElementById('question-count').textContent = `Song ${current + 1} of ${currentQuestions.length}`;
  
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
  const nextButton = document.getElementById('next-button');
  
  if (choice === q.answer) {
    feedback.textContent = '✅ Correct!';
    feedback.className = 'text-green-600 font-bold';
    score++;
  } else {
    feedback.textContent = `❌ Wrong! That was a ${q.answer.charAt(0).toUpperCase() + q.answer.slice(1)} beat.`;
    feedback.className = 'text-red-600 font-bold';
    info.textContent = q.regionInfo[q.answer];
    info.classList.remove('hidden');
  }
  
  document.getElementById('score').textContent = `Score: ${score}/${currentQuestions.length}`;
  nextButton.classList.remove('hidden');
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
