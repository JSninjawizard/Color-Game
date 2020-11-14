// (1) - Make Array of Colors:
// hard Coded:
// let colors = [
//     "rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 255, 255)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 0, 255)"
// ]

// Keep track whether 6 or 3 squares
let squaresNumber = 6;

// Randomized
let colors = generateRandomColors(squaresNumber);

// (2) - Squares Manipulation:
// (2.1) Select all six squares
// (2.2) Loop through them
// (2.3) Assing one of each color from array
let squares = document.querySelectorAll(".square")

// -(6.2)- "Try Again" Message will be displayed in span if incorrect color was clicked
let rightOrWrong = document.getElementById("rightOrWrong")

let h1 = document.querySelector("h1");

let buttonReset = document.getElementById("reset");
buttonReset.addEventListener("click", function (){
    // Once Clicked generate new colors
    colors = generateRandomColors(squaresNumber)
    // Pick a new random color from array
    pickedColor = pickColor();
    // Change Color display in H1 to match picked color
    color2Guess.textContent = pickedColor;
    // change color of squares
    for (let index = 0; index < squares.length; index++) {
        squares[index].style.backgroundColor = colors[index]
    }
    // reset h1 to default
    h1.style.backgroundColor = "steelblue";
    // reset rightOrWrong span
    rightOrWrong.textContent = "";
    // play again will change to new colors
    buttonReset.textContent = "New Colors"
});

for (index = 0; index < colors.length; index++) {
    // -(2.3)-
    squares[index].style.backgroundColor = colors[index];
    

    // (5) Adding Click Events:
    squares[index].addEventListener("click", function () {
        // -(5.1)- each color that user clicks gets a response
        // alert(`you clicked ${this.style.backgroundColor}`);
        
        // -(5.2)- grab a color of clicked square
        let clickedSquare = this.style.backgroundColor
        console.log(`The Color You Clicked is: ${clickedSquare}`)
        
        // -(5.3)- compare it to the color that is to be guessed
        if (clickedSquare === pickedColor) {
            // alert ("Correct!")
            // -(6.4)- display "Correct"
            rightOrWrong.textContent = "👍 Correct 👍"
            changeColor(clickedSquare)
            h1.style.backgroundColor = pickedColor
            buttonReset.textContent = "Play Again?"
            
        } else {
            // alert("Wrong!")

            // (6) Adding Behaviour For Wrong Answers:
            // -(6.1)- wrong square changes to background color
            this.style.backgroundColor = "#232323";
            
            // -(6.3)- display "Try Again"
            rightOrWrong.textContent = "Try Again"
        }
    })
}

// (3) Choose The color to be The Goal:
// Hard coded:
// let pickedColor = colors[3];

// Randomized:
let pickedColor =  pickColor ();


// (4) - Show RGB Number to Guess Within H1:
    // (4.1) Select the span within h1
    let color2Guess = document.getElementsByTagName("span")[0];
    // (4.2) assign the rgn color to span to be shown in h1
    color2Guess.textContent = pickedColor

// (7) change the color of all squares and h1 to goal color
function changeColor (color) {
    // -(7.1)- Loop through all squares 
    for (let index = 0; index < squares.length; index++) {

        // -(7.2)- Change each color to match goal color
        squares[index].style.backgroundColor = color;
    }
}

function pickColor () {
    let random = Math.floor(Math.random() * colors.length)
    return colors[random]
}

function generateRandomColors (num) {
    // make an array 
    let array = [];
    // repeat num times
    for (let i = 0; i < num; i++) {
        // add num random colors to array
        array.push(randomColor())
    }
    // return that array
    return array;
}

function randomColor () {
    // pick a "red" from 0 - 255
   let r =  Math.floor(Math.random() * 256);
   // pick a "green" from 0 - 255
   let g =  Math.floor(Math.random() * 256);
   // pick a "blue" from 0 - 255
   let b =  Math.floor(Math.random() * 256);

   return "rgb(" + r + ", " + g + ", " + b + ")"
}

// buttons Easy and Hard
let easy = document.getElementById("easy");
let hard = document.querySelector("#hard");

easy.addEventListener("click", function() {
    easy.classList.add("selected");
    hard.classList.remove("selected");
    squaresNumber = 3;
    
    // generate 3 random colors
    colors = generateRandomColors(squaresNumber);
    // Pick a new random color from array
    pickedColor = pickColor();
    // Change rgb() span in H1 to match picked color
    color2Guess.textContent = pickedColor;
    // loop through squares 6 quares:
        // First 3 = assign new color
        // Last 3 = delete 
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none"
        }
    }

});

hard.addEventListener("click", function() {
    hard.classList.add("selected");
    easy.classList.remove("selected");
    squaresNumber = 6;

        // generate 6 random colors
        colors = generateRandomColors(squaresNumber);
        // Pick a new random color from array
        pickedColor = pickColor();
        // Change rgb() span in H1 to match picked color
        color2Guess.textContent = pickedColor;
        // loop through squares 6 quares:
            // First 3 = assign new color
            // Last 3 = delete 
        for (let i = 0; i < squares.length; i++) {
                squares[i].style.backgroundColor = colors[i];
                squares[i].style.display = "block";
        }
    });

