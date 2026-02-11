console.log("Hello World");

var a = 1078698;
var b = 20986;

setTimeout(() => {
  console.log("setTimeout called ASAP");
}, 0);

setTimeout(() => {
    console.log("setTimeout called after 3 seconds");
}, 3000);
function multiplyFn() {
  const result = a * b;
  return result;
}

console.log("Multiplication result is:", multiplyFn());