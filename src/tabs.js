const PAGES = Object.freeze({
    DATECALC: 0,
    TIMER: 1,
});

let currentPage = PAGES.DATECALC;

const dateCalcPage = document.querySelector('#datecalc');
const timerPage = document.querySelector('.timer-block');
const dateCalcTab = document.querySelector('#datecalc-tab');
const timerTab = document.querySelector('#timer-tab');
const tabsNav = document.querySelectorAll('.tabs');

const handleClick = (clickEventTab) => {
    const clickedTab = clickEventTab.target;
    console.log(clickedTab);
    const tabId = clickedTab.id;
    changePage(tabId);
}

tabsNav.forEach(elem => {
    elem.addEventListener('click', handleClick);
})

const changePage = (tabId) => {
    if (currentPage === PAGES.DATECALC) {
        dateCalcOff();
    } else if (currentPage === PAGES.TIMER) {
        timerOff();
    }

    if (tabId === 'datecalc-tab') {
        dateCalcOn();
    } else if (tabId === 'timer-tab') {
        timerOn();
    }
}

const timerOn = () => {
    timerPage.style.display = 'block'
    timerTab.style.background = 'grey';
    currentPage = PAGES.TIMER;
}

const timerOff = () => {
    timerPage.style.display = 'none'
    timerTab.style.background = 'rgb(235, 231, 231)';
}
const dateCalcOn = () => {
    dateCalcPage.style.display = 'block'
    dateCalcTab.style.background = 'grey';
    currentPage = PAGES.DATECALC;
}
const dateCalcOff = () => {
    dateCalcPage.style.display = 'none'
    dateCalcTab.style.background = 'rgb(235, 231, 231)';
}
