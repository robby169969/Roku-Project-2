//A javascript exercise that takes a argument and manipulate the data in some way

let answer1 = prompt("How many colors are you wearing?");
let answer2 = prompt("How many number of pieces are in a loaf?");
let answer3 = prompt("How many pieces of choclate can fit in your mouth?");
let answerTotal = parseInt(answer1) + parseInt(answer2) + parseInt(answer3);

function pieCalculator(num){
    return num * 3.33;
}

alert(" This is how many sexual encounters you will have if you eat " + pieCalculator(answerTotal) + " pieces of bread!");


