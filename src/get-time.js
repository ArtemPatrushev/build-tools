import { timer } from './timer.js';

const userMinutes = document.querySelector('.timer-block__user-minutes');
const userSeconds = document.querySelector('.timer-block__user-seconds');

export const getUserTime = () => {
    let userMinsValue = userMinutes.value;
    let userSecsValue = userSeconds.value;
    timer.setTime(userMinsValue, userSecsValue);
    timer.start();
}