const colors = [
  '#800080',
  '#8A2BE2',
  '#FF00FF',
  '#FF69B4',
  '#C71585',
  '#DB7093',
];

const refs = {
  div: document.querySelector('.timer'),
};
const divSec = refs.div.lastElementChild;

setInterval(() => {
  const randomColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  divSec.style.backgroundColor = randomColor;
}, 1000);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
