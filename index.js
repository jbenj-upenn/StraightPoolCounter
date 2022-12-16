
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

