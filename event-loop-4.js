const fs = require("fs");

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer expired"), 0);

Promise.resolve().then(() => console.log("Promise"));


fs.readFile("./file.txt", "utf8", () => {
  console.log("File Reading CB");
});

process.nextTick(() => {
  process.nextTick(() => console.log("inner nextTick"));
  Promise.resolve().then(() => console.log("Promise - 1 in nextTick"));
  console.log("nextTick");
});

console.log("Last line of the file.");