const fs = require("fs");

const a = 100;

setImmediate(() => console.log("setImmediate"));

Promise.resolve().then(() => console.log("Promise1"));

process.nextTick(() => console.log("process.nextTick1"));

fs.readFile("./file.txt", "utf8", () => {
  console.log("File Reading CB");
});

process.nextTick(() => console.log("process.nextTick2"));


setTimeout(() => console.log("Timer expired"), 1000);

process.nextTick(() => console.log("process.nextTick3"));
process.nextTick(() => console.log("process.nextTick4"));

Promise.resolve().then(() => console.log("Promise1"));



function printA() {
  console.log("a=", a);
}

printA();

console.log("Last line of the file.");

Promise.resolve().then(() => console.log("Promise3"));
