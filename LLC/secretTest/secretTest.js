// Requiring fs module in which
// writeFile function is defined.
 
// Data which will write in a file.
import * as fs from 'fs';
const fs = require('fs')


function fileTest() {
    
    let data = "Hello world."
 
    // Write data in 'Hello.txt' .
    fs.writeFile('Hello.txt', data, (err) => {
     
        // In case of a error throw err.
        if (err) throw err;
    })



    //testInput = document.getElementById("test").value;
}