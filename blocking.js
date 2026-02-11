const crypto = require("node:crypto");

console.log("Hello World");

var a = 1078698;
var b = 20986;

// pbkdf2 - Password Based Key Derivative Function

// 🔥 Synchronous Function - Will BLOCK THE MAIN THREAD - DON'T USE IT
crypto.pbkdf2Sync("password", "salt", 50000000, 50, "sha512");
console.log("First Key is Generated");


setTimeout(() => {
  console.log("setTimeout called after 1 seconds");
}, 0);


// ✅ Async Function
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("Second Key is generated");
});

function multiplyFn(x, y) {
  const result = a * b;
  return result;
}

console.log("Multiplication result is :", multiplyFn(a, b));