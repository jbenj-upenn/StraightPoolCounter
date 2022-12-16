// document.getElementById("count-el").innerText = 50;

// let firstBatch = 5;
// let secondBatch = 12;

// let count = firstBatch + secondBatch;

// console.log(count);

// let count = 5;
// count = count++;
// console.log(count);

// let bonusPoints = 50;
// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);
// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);
// bonusPoints = bonusPoints + 45;

// console.log(bonusPoints);

// 
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let runEl = document.getElementById("run-el")

console.log(saveEl);


let count = 0;
let reset = 0;


function increment(){
    count += 1;
    countEl.innerText = count;

}

function save(){
    let runningCount = " " + count + " - ";
    saveEl.innerText += runningCount; //search innerText alternative mdn and use textContent
    countEl.innerText = 0;
    count = 0;
    runEl.innerText = "Run 'em higher!"
}

