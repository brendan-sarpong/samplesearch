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
        <h2 class='text-2xl font-bold text-purple-700'>Game Over!</h2>
        <p class='text-lg mt-2'>Final Score: ${score}/${questions.length}</p>
        <div class="mt-6 space-y-4">
          <button onclick="window.location.reload()" class="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg">
            Play Again
          </button>
          <a href="regions.html" class="block w-full bg-purple-100 hover:bg-purple-200 text-purple-700 font-bold py-3 px-6 rounded-lg text-center">
            Review Regions
          </a>
        </div>
      `;
    }
  }, 3000);
}

window.onload = loadQuestion;
