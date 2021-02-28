import './styles.css';
import './js/style';

let refs = {
  timeInDays: document.querySelector('[data-value="days"]'),
  // timeInDays: document.querySelector('#timer-1 [data-value="days"]'),

  timeInHours: document.querySelector('[data-value="hours"]'),
  timeInMins: document.querySelector('[data-value="mins"]'),
  timeInSecs: document.querySelector('[data-value="secs"]'),
};
// console.log(refs.timeInDays);
// const target = new Date(2021, 3, 18, 12, 30);

// const timer = {
//   start() {
//     setInterval(() => {
//       const realTime = Date.now();
//       const currentTime = target - realTime;
//       changeTimerFace(currentTime);
//     }, 1000);
//   },
// };

// function changeTimerFace(time) {
//   const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//   );
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//   refs.timeInDays.textContent = `${days}`;
//   refs.timeInHours.textContent = `${hours}`;
//   refs.timeInMins.textContent = `${mins}`;
//   refs.timeInSecs.textContent = `${secs}`;
// }

// function pad(value) {
//   return String(value).padStart(2, '0');
// }

// timer.start();

////////////////////////////////////////////////////////////////////////////////////////

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  start() {
    setInterval(() => {
      const realTime = Date.now();
      const currentTime = this.targetDate - realTime;
      this.changeTimerFace(currentTime);
    }, 1000);
  }

  changeTimerFace(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    // console.log(refs.timeInDays);
    refs.timeInDays.textContent = `${days}`;
    refs.timeInHours.textContent = `${hours}`;
    refs.timeInMins.textContent = `${mins}`;
    refs.timeInSecs.textContent = `${secs}`;
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('March 18, 2021'),
});

timer.start();
