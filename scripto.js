function numRange(max) {
  return Math.floor(Math.random() * max);
}

let rgbColor;
function colorRandomizer(r, g, b) {
  r = numRange(256);
  g = numRange(256);
  b = numRange(256);
  return `(${r},${g},${b})`;
}
rgbColor = colorRandomizer();
console.log(rgbColor);

const rgbTitle = document.querySelector(".rgb-numbers");
rgbTitle.innerHTML = rgbColor;

// Variables
const wrapper = document.getElementById("wrapper");
const boxes = document.querySelectorAll(".box");
const levels = document.querySelectorAll(".level");
const newGame = document.querySelector(".new-game");
const easy = document.querySelector(".easy");
const medium = document.querySelector(".medium");
const hard = document.querySelector(".hard");

// Levels
levels.forEach((level) => {
  level.addEventListener("click", () => {
    levels.forEach((el) => el.classList.remove("active"));

    level.classList.add("active");
  });
});

const indexes = Array.from({ length: boxes.length }, (_, i) => i);

function difficulty(level) {
  const res = [];
  for (i = 0; i < level; i++) {
    const rand = Math.floor(Math.random() * indexes.length);
    res.push(rand);
  }
  return res;
}

// console.log(difficulty(3));
// console.log(difficulty(6));

// Second Way to: Generate random arr of unique numbers
console.log("--");
function myRandomInts(quantity, max) {
  const arr = [];
  while (arr.length < quantity) {
    let candidateInt = Math.floor(Math.random() * max);
    if (arr.indexOf(candidateInt) === -1) arr.push(candidateInt);
  }
  return arr;
}

//! Difficulties
const easyDiff = myRandomInts(6, boxes.length);
const mediumDiff = myRandomInts(3, boxes.length);
const hardDiff = myRandomInts(9, boxes.length);

//@ active boxes - actual boxes to guess
const easyLevelBoxes = indexes.filter((el) => !easyDiff.includes(el));
const mediumLevelBoxes = indexes.filter((el) => !mediumDiff.includes(el));

//@ Pick one box from filtered array
// const easyIndex = Math.floor(Math.random() * easyLevelBoxes.length);
let easySquare2Guess =
  easyLevelBoxes[Math.floor(Math.random() * easyLevelBoxes.length)];
let mediumSquare2Guess =
  mediumLevelBoxes[Math.floor(Math.random() * mediumLevelBoxes.length)];
let hardSquare2Guess = hardDiff[Math.floor(Math.random() * hardDiff.length)];
console.log(easySquare2Guess);

//!Easy Difficulty
console.log(indexes);
// console.log('EASY');
// console.log(easyDiff.sort());
// console.log(easyLevelBoxes);
// console.log(easySquare2Guess);
// console.log('--');
// console.log('--');
// console.log('MED');
// console.log(mediumDiff.sort());
// console.log(mediumLevelBoxes);
// console.log(mediumSquare2Guess);
// console.log('--');
// console.log('--');

function reset() {
  wrapper.style.backgroundColor = "#131842";
  boxes.forEach((el) => {
    el.style.opacity = "1";
    el.style.backgroundColor = "#131842";
  });
}

boxes.forEach((el, i) => {
  reset();
});

let easyBoxes2Guess
let easyBoxes2Hide
let easyBox2Guess

function easyRandomize() {
     easyBoxes2Guess = myRandomInts(3, boxes.length);
     easyBoxes2Hide = indexes.filter((el) => !easyBoxes2Guess.includes(el));
     easyBox2Guess =
     easyBoxes2Guess[Math.floor(Math.random() * easyBoxes2Guess.length)];
  console.log(easyBox2Guess);

  easyBoxes2Hide.forEach((el) => {
    boxes[el].style.opacity = "0.01";
  });
  easyGuessGame()
}

function easyGuessGame () {
    easyBoxes2Guess.forEach((el) => {
      boxes[el].style.backgroundColor = `rgb${colorRandomizer()}`;
      boxes[easyBox2Guess].style.backgroundColor = `rgb${rgbColor}`;

      boxes[el].addEventListener('click', () => {
        console.log(`el: ${el} waz kluked`);
        if (easyBox2Guess === el) {
            console.log('correct');
            wrapper.style.backgroundColor = `rgb${rgbColor}`;
        }
      })

    });
    console.log(`rgb${rgbColor}`);
    console.log(easyBox2Guess);
}


function newColor () {
    rgbColor = colorRandomizer();
    console.log(rgbColor);
    rgbTitle.innerHTML = rgbColor;
    rgbTitle.style.color = `rgb${(rgbColor)}`
    boxes[easyBox2Guess].style.backgroundColor = `rgb${rgbColor}`;
}


const timer = document.querySelector('.container-timer')
const boxContainer = document.querySelector('.main-container')

//! Easy fucntionality
easy.addEventListener("click", () => {
  boxContainer.style.gridTemplateColumns = "1fr 2fr 1fr";
  boxContainer.style.transition = '300ms'
  reset();
  easyRandomize();
  newColor()

  timer.style.display = 'grid'
//   timer.style.transition = "all 2s";



  //   easyDiff.forEach((el) => {
  //     boxes[el].style.opacity = "0.01";
  //   });

  //   easyLevelBoxes.forEach((el) => {
  //     boxes[el].style.backgroundColor = `rgb${colorRandomizer()}`;
  //     boxes[easySquare2Guess].style.backgroundColor = `rgb${rgbColor}`;
  //     boxes[el].addEventListener("click", () => {
  //       console.log(`el: ${el} was clicked`);
  //       if (easySquare2Guess === el) {
  //         console.log("correct");
  //         wrapper.style.backgroundColor = `rgb${rgbColor}`;
  //         alert("פששש שקורה!!! סחטיין");
  //       }
  //     });
  //   });
});

//@ Medium button functionlity
medium.addEventListener("click", () => {
  reset();

  mediumDiff.forEach((el) => {
    boxes[el].style.opacity = "0.01";
  });

  mediumLevelBoxes.forEach((el) => {
    boxes[el].style.backgroundColor = `rgb${colorRandomizer()}`;
    boxes[mediumSquare2Guess].style.backgroundColor = `rgb${rgbColor}`;
    boxes[el].addEventListener("click", () => {
      console.log(`el: ${el} was clicked`);
      if (mediumSquare2Guess === el) {
        console.log("correct");
        wrapper.style.backgroundColor = `rgb${rgbColor}`;
        alert("פששש שקורה!!! סחטיין");
      }
    });
  });
});

//! Hard button functionlity
hard.addEventListener("click", () => {
  reset();

  hardDiff.forEach((el) => {
    boxes[el].style.backgroundColor = `rgb${colorRandomizer()}`;
    boxes[hardSquare2Guess].style.backgroundColor = `rgb${rgbColor}`;
  });
});

// New color functionality
newGame.addEventListener("click", () => {
  reset();
});
// });

// Easy button functionlity
