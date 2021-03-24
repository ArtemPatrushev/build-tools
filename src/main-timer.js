import { getUserTime } from './get-time.js';
import { freezeTime } from './timer-stop.js';
import { continueTime } from './continue-time.js';
import { resetTime } from './reset-time.js';
// import { timerSound } from './audio.js';

const startBtn = document.querySelector('.timer-block__start-time');
const stopBtn = document.querySelector('.timer-block__stop-time');
const continueBtn = document.querySelector('.timer-block__continue-time');
const resetBtn = document.querySelector('.timer-block__reset-time');

startBtn.addEventListener('click', getUserTime);
// startBtn.addEventListener('click', timerSound);
stopBtn.addEventListener('click', freezeTime);
continueBtn.addEventListener('click', continueTime);
resetBtn.addEventListener('click', resetTime);
