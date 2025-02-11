// declare and initialize an array to hold test scores from user
const scores = [];
 
// use do-while loop to get scores from the user and store in array
let score = 0;
do {
    score = parseInt(prompt(
        "Enter a test score, or enter -1 to end scores", -1));
 
    if (score >= 0 && score <= 100) {
        scores[scores.length] = score;
    }
    else if (score != -1){
        alert("Score must by a valid number from 0 through 100");
    }
}
while(score != -1);

if (scores.length > 0) {
    // use a for-in loop to add each score to total and display it
    let total = 0;
    let index = 0;
    for (let i of scores) {
        total += i;
        index++;
        document.write(
            `<p>Score ${parseInt(index)}: ${i}</p>`);
    }
 
    //calculate and display the average
    const average = parseInt(total/scores.length);
    document.write(`<p>Average score is ${average}</p>`);
}
 