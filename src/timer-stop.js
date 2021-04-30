import { timer } from './timer.js';

export const freezeTime = () => {
    timer.stop();
}