import { timer } from './timer.js';
import { notifier } from './timer.js';

export const resetTime = () => {
    timer.reset();
    notifier.innerHTML = '00 : 00';
}