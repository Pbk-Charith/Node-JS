const https = require("https");
const fs = require("fs");

console.log("Hello World");

var a = 1078698;
var b = 20986;

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Fetched Data Successfully");
});

setTimeout(() => {
  console.log("setTimeout called after 1 seconds");
}, 1000);

fs.readFile("./file.txt", "utf8", (err, data) => {
  console.log("File Data:", data);
});

function multiplyFn() {
  const result = a * b;
  return result;
}

console.log("Multiplication result is:", multiplyFn());


//  How this works... 
// 1. The code starts executing and logs "Hello World" to the console.
// 2. It defines two variables a and b with values 1078698 and 20986 respectively.
// 3. It makes an HTTPS GET request to "https://dummyjson.com/products/1". When the response is received, it logs "Fetched Data Successfully" to the console.
// 4. It sets a timeout to log "setTimeout called after 5 seconds" after 5 seconds.
// 5. It reads the contents of "file.txt" asynchronously. When the file is read, it logs the file data to the console.
// 6. It defines a function multiplyFn that multiplies a and b and returns the result.
// 7. Finally, it calls multiplyFn and logs the multiplication result to the console.

// Output: // The output will be:
// Hello World
// Multiplication result is:  22617184928
// Fetched Data Successfully
// File Data: <contents of file.txt>
// setTimeout called after 1 seconds