import data from 'data.json';

console.log("data: ",data);
let whatever = data;
console.log("whatever: ",whatever)

function workingisfun() {
    console.log("working is fun!");
    console.log("in function data:", data)
    console.log("in function whatever:", whatever);
}