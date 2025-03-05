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

const rgbTitle = document.querySelector(".rgb-numbers");
rgbTitle.innerHTML = rgbColor;

// Variables
const boxes = document.querySelectorAll(".box");
const newGame = document.querySelector(".new-game");
const easy = document.querySelector('.easy')
const medium = document.querySelector('.medium')


const indexes = Array.from({ length: boxes.length }, (_, i) => i);
console.log(indexes);

function difficulty (level) {
    const res = []
        for (i=0; i < level; i++) {
            const rand = Math.floor(Math.random() * indexes.length);
                res.push(rand)
        }
        return res
}

console.log(difficulty(3));
console.log(difficulty(6));


// Second Way to: Generate random arr of unique numbers
console.log('--');
function myRandomInts(quantity, max){
    const arr = []
    while(arr.length < quantity){
      var candidateInt = Math.floor(Math.random() * max) + 1
      if(arr.indexOf(candidateInt) === -1) arr.push(candidateInt)
    }
  return(arr)
  }
  console.log(myRandomInts(3,boxes.length));
  console.log(myRandomInts(6,boxes.length));
  const easyDiff = myRandomInts(6,boxes.length)
  const mediumDiff = myRandomInts(3,boxes.length)
  console.log(easyDiff);
console.log('--');


boxes.forEach((el, i) => {
    function reset () {
        el.style.opacity = '1'
    }

    // el.style.backgroundColor = `rgb${ColorRandomizer()}`;
    
    // Easy fucntionality
    easy.addEventListener('click', () => {
        reset()
        easyDiff.filter(x => {
            if (x === i+1) {
                console.log(x);
                el.style.opacity = '0.1'
            } else {
                el.style.backgroundColor = `rgb${ColorRandomizer()}`;
            }
        })
    })
    
    // Medium button functionlity
    medium.addEventListener('click', () => {
        reset()
        mediumDiff.filter(x => {
            if (x === i+1) {
                console.log(x);
                el.style.opacity = '0.1'
            } else {
                el.style.backgroundColor = `rgb${ColorRandomizer()}`;
            }
        })
    })
        


    // New color functionality
    newGame.addEventListener("click", () => {
        el.style.backgroundColor = `rgb${ColorRandomizer()}`;
    });
});

// Hard button functionlity


// Easy button functionlity

