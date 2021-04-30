import { audio } from './audio.js';

class Timer {
    #renderCallback = null;
    #secondsLeft = 0;
    #interval = null;

    /**
     * @param {function} renderCallback Callback with two params (minutes, seconds) to render timer
     */
    constructor(renderCallback) {
        if (typeof renderCallback !== 'function') {
            throw new Error('Timer.constructor arguments error');
        }
        this.#renderCallback = (seconds) => {
            const m = ~~(seconds / 60);
            const s = seconds % 60;
            renderCallback(m, s);
        };
    }

    /**
     * Sets time in timer
     * @param {number} mins Minutes to set in timer
     * @param {number} secs Seconds to set in timer
     */
    setTime(mins, secs) {
        mins = +mins;
        secs = +secs;
        if (mins !== mins || secs !== secs || mins < 0 || secs < 0 || secs > 59) {
            throw new Error('Timer.setTime arguments error');
        }
        this.#secondsLeft = mins * 60 + secs;
        this.#renderCallback(this.#secondsLeft);
    }

    /** Starts countdown */
    start() {
        this.#interval = setInterval(() => {
            --this.#secondsLeft;
            this.#renderCallback(this.#secondsLeft);
            this.#secondsLeft <= 0 && this.stop();
            if (this.#secondsLeft <= 12) {
                audio.play();
            }
        }, 1000);
    }

    /** Stop countdown */
    stop() {
        clearInterval(this.#interval);
    }

    /** Continue countdown */
    continue() {
        this.start();
    }

    /** Reset countdown */
    reset() {
        this.stop();
        this.setTime(0, 0)
    }
}

export const timer = new Timer((m, s) => {
    notifier.innerHTML = `${m} : ${s}`;
});

export const notifier = document.querySelector('.timer-block__notifier');



