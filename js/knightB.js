//LOAD DEFS (CHESS PIECES)

//get file path
var file = "./svg/pieces.html";
//read file (from responseText)
var readFile = utilFile.include(file);
//write file
utilFile.write("svgChess", readFile);
//log
console.log("svg loaded");

// //get file path
// var file = "./svg/knightB.html";
// //read file (from responseText)
// var readFile = utilFile.include(file);
// //write file
// utilFile.write("knightB", readFile);
// //log
// console.log("svg loaded");