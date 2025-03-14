function numRange(max) {
  return Math.floor(Math.random() * max);
}

let rgbColor;
function ColorRandomizer(r, g, b) {
  r = numRange(256);
  g = numRange(256);
  b = numRange(256);
  return `(${r},${g},${b})`;
}
rgbColor = ColorRandomizer();
console.log(rgbColor);

const rgbTitle = document.querySelector(".rgb-numbers");
rgbTitle.innerHTML = rgbColor;

// Variables
const wrapper = document.getElementById('wrapper')
const boxes = document.querySelectorAll(".box");
const newGame = document.querySelector(".new-game");
const easy = document.querySelector(".easy");
const medium = document.querySelector(".medium");
const hard = document.querySelector(".hard");

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
const easyLevelBoxes = indexes.filter(el => !easyDiff.includes(el))
const mediumLevelBoxes = indexes.filter(el => !mediumDiff.includes(el))

//@ Pick one box from filtered array
// const easyIndex = Math.floor(Math.random() * easyLevelBoxes.length);
let easySquare2Guess = easyLevelBoxes[Math.floor(Math.random() * easyLevelBoxes.length)];


//!Easy Difficulty
//@(1) Filter 6 boxes from original array
console.log(indexes);
console.log(easyDiff.sort());
console.log(easyLevelBoxes);
console.log(easySquare2Guess);

function reset() {
    boxes.forEach((el) => {
        el.style.opacity = "1";
    })
}

boxes.forEach((el, i) => {
    reset()
})
  // el.style.backgroundColor = `rgb${ColorRandomizer()}`;

  //! Easy fucntionality
  easy.addEventListener("click", () => {
    reset();

    easyDiff.forEach((el) => {
        boxes[el].style.opacity = "0.01"; 
    })

    easyLevelBoxes.forEach((el) => {
        boxes[el].style.backgroundColor = `rgb${ColorRandomizer()}`
        boxes[easySquare2Guess]. style.backgroundColor = `rgb${rgbColor}`
        boxes[el].addEventListener('click', () => {
            console.log(`el: ${el} was clicked`);
            if (easySquare2Guess === el) {
                console.log('correct');
                wrapper.style.backgroundColor = `rgb${rgbColor}`
                alert('פששש שקורה!!! סחטיין')
            }
        })
    })


    // easyDiff.filter((x) => {
    //     if (x === i) {
    //         el.style.opacity = "0";
    //     }
    // })

    // el.style.backgroundColor = `rgb${ColorRandomizer()}`;
    // easyLevelBoxes.filter((x) )
    
  });

  // Medium button functionlity
  medium.addEventListener("click", () => {
    reset();
    mediumDiff.filter(x => {
        if (x === i+1) {
            console.log(x);
            console.log(el);
            el.style.opacity = '0';
            el.style.backgroundColor = 'white';
            console.log(el);

        } if (x !== i) {
            el.style.backgroundColor = `rgb${ColorRandomizer()}`;
        }
    });
  });

  // Hard button functionlity
  hard.addEventListener("click", () => {
    reset();
    hardDiff.filter((x) => {
      if (x === i + 1) {
        console.log(x);
        el.style.backgroundColor = `rgb${ColorRandomizer()}`;
      } else {
        // el.style.opacity = '0.1'
      }
    });
  });

  // New color functionality
  newGame.addEventListener("click", () => {
    reset();
    el.style.backgroundColor = `rgb${ColorRandomizer()}`;
  });
// });

// Easy button functionlity
