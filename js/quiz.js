// quiz.js
const questions = [
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
  }
];

let current = 0;
let score = 0;

function loadQuestion() {
  const q = questions[current];
  const audio = document.getElementById('audio');
  if (audio) audio.src = q.audio;
  document.getElementById('feedback').textContent = '';
  document.getElementById('region-info').classList.add('hidden');
  document.getElementById('region-info').textContent = '';
  document.getElementById('score').textContent = `Score: ${score}/${questions.length}`;
  document.getElementById('question-count').textContent = `Song ${current + 1} of ${questions.length}`;
}

function checkAnswer(choice) {
  const q = questions[current];
  const feedback = document.getElementById('feedback');
  const info = document.getElementById('region-info');
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
  document.getElementById('score').textContent = `Score: ${score}/${questions.length}`;

  setTimeout(() => {
    current++;
    if (current < questions.length) {
      loadQuestion();
    } else {
      document.getElementById('quiz-area').innerHTML = `
        <h2 class='text-4xl font-extrabold text-accent mb-6'>Game Over!</h2>
        <p class='text-2xl text-primary mb-8'>Final Score: ${score}/${questions.length}</p>
        <div class="mt-6 space-y-4 max-w-md mx-auto">
          <button onclick="window.location.reload()" class="btn-primary font-bold py-4 px-8 rounded-full shadow-2xl transition-transform hover:scale-110 text-xl w-full">
            Play Again
          </button>
          <a href="regions.html" class="block w-full text-center text-primary hover-accent font-bold py-4 px-8 rounded-full text-xl">
            Review Regions
          </a>
        </div>
      `;
    }
  }, 3000);
}

window.onload = loadQuestion;
