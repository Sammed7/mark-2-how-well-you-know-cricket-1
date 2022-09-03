var readlineSync = require("readline-sync");

var score = 0

var userName = readlineSync.question("what is your name? ");

console.log("welcome " + userName + " to the game ! how much you know cricket");

// data of high score
var highscore = [
  {
    name: "sammmed",
    score: 5
  },
  {
    name: "akanksha",
    score: 4
  }
];

// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!")
    score = score + 1;
  }
  else {
    console.log("wrong!")
  }
  console.log("Your score is: " + score)
  console.log("--------------")
}

var questions = [{
  question: "How many player are there in one team? ",
  answer: "11"
}, {
  question: "Who will make dision on weather batsman is out or not? ",
  answer: "umpire"
}, {
  question: "Length of pitch in cricket in meters? ",
  answer: "20"
}, {
  question: "In cricket there are three formats. t20, oneday, and ?? ",
  answer: "test"
}, {
  question: "which indian crickter loves cover drive?(please enter only first name) ",
  answer: "virat"
}];

// loop

for (i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer)
}

console.log("Yay! you scored " + score);

console.log("checkout high Scores: ")

for (i = 0; i < highscore.length; i++) {
  console.log(highscore[i].name, highscore[i].score)
}
console.log("If you have beaten this please ping me and I will update it.")