/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */
// global constants

const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const gameTime = 300;
const maxMistakes = 3;

//Global Variables
var pattern;
var clueHoldTime = 500; //how long to hold each clue's light/sound
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.4;
var guessCounter = 0;
var mistakeCounter = 0;
var timer; // timer holder
var clock; // time left in the game

function newPattern() {
  let pattern = new Array(8);
  for (let i = 0; i < 8; i++) {
    pattern[i] = Math.round(Math.random() * 5) + 1;
  }
  return pattern;
}

function startGame() {
  pattern = newPattern();
  startClock(gameTime);
  progress = 0;
  mistakeCounter = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  stopTime();
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

const freqMap = {
  1: 284.5,
  2: 305.6,
  3: 315,
  4: 360.2,
  5: 400,
  6: 421.3,
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
    clueHoldTime -= 45;
  }
  clueHoldTime = 500;
}

function guess(btn) {
  if (!gamePlaying) {
    return;
  }

  if (pattern[guessCounter] == btn) {
    if (guessCounter == progress) {
      if (guessCounter == pattern.length - 1) {
        winGame();
      } else {
        progress++;
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  } else {
    if (mistakeCounter == maxMistakes) {
      loseGame();
    }
    mistakeCounter++;
  }
}

function loseGame() {
  stopGame();
  alert("Game over. You lost. Better luck next time");
}

function winGame() {
  stopGame();
  alert("Game over. Congradulations you won!");
}

function startClock(time) {
  clock = time;
  timer = setInterval(changeTime, 1000); // every second
}

function stopTime() {
  clearInterval(timer);
  document.getElementById("clock").innerHTML = "     ";
}

function changeTime() {
  if (gamePlaying) {
    document.getElementById("clock").innerHTML = "Time left: " + clock + "s";
    if (clock > 0) {
      clock--;
    } else {
      loseGame();
    }
  }
}
