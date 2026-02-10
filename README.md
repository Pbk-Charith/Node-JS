# Node-JS
Node-JS
 -------------------------------------------------------------------------------- 
- Where ever there is a java script code. There will be a Java Script Engine.
- V8 can be embedded into any C++ application.
- We can write the Node.js code in Node REPL (Read, Evaluate, Print, Loop).

| Step      | Meaning                  | What it does                       |
| --------- | ------------------------ | ---------------------------------- |
| **Read**  | Takes your input         | Reads the JavaScript code you type |
| **Eval**  | Evaluates it             | Executes that code                 |
| **Print** | Displays the result      | Prints the output to the console   |
| **Loop**  | Waits for the next input | Repeats the process again          |

 -------------------------------------------------------------------------------- 
 --------------------------------------------------------------------------------

- When you need to run one module in another module only console logs will be executed on the module. if there is Functions and some private variables are there the Module protects their variables and functions from leaking into global scope. Then you should use the module export to export it to another module. We have to give the access. 

 
 --------------------------------------------------------------------------------
 --------------------------------------------------------------------------------

 | Feature               | CommonJS (CJS)                                                       | ES Modules (ESM)                                                    |
| --------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------- |
| **Syntax**            | Uses `require()` and `module.exports`                                | Uses `import` and `export`                                          |
| **Default in**        | Node.js (before ES6)                                                 | Modern JavaScript (ES6 and later)                                   |
| **Loading Type**      | **Synchronous** — modules are loaded at runtime                      | **Asynchronous** — modules are loaded before execution              |
| **File Extension**    | Usually `.js`                                                        | Usually `.mjs` or `.js` (when `"type": "module"` in `package.json`) |
| **Export Style**      | `module.exports = value` or `exports.name = value`                   | `export default value` or `export const name = value`               |
| **Import Style**      | `const lib = require('lib')`                                         | `import lib from 'lib'`                                             |
| **Scope**             | Each file has its own scope; variables not global                    | Same — but imports are *read-only bindings*                         |
| **When Evaluated**    | Modules load **at runtime**                                          | Modules load **at parse time** (before execution)                   |
| **Supported In**      | Node.js (CommonJS environment)                                       | Browsers and Node.js (from v12+ with flags, now natively)           |
| **Interoperability**  | Can use ES modules with special handling (`import()` or transpilers) | Can import CommonJS via dynamic `import()` in Node                  |
| **Tree Shaking**      | ❌ Not supported                                                      | ✅ Supported (helps remove unused code)                              |
| **Top-level `await`** | ❌ Not supported                                                      | ✅ Supported                                                         |
| **Caching**           | Once loaded, cached in memory (single instance)                      | Similar, but module graph is static and pre-optimized               |

 --------------------------------------------------------------------------------

commonjs: // math.js
module.exports.add = (a, b) => a + b;

// main.js
const math = require('./math');
console.log(math.add(2, 3));

 --------------------------------------------------------------------------------

ES Modules: // math.mjs
export const add = (a, b) => a + b;

// main.mjs
import { add } from './math.mjs';
console.log(add(2, 3));

 --------------------------------------------------------------------------------


🚫 Strict Mode vs ✅ Non-Strict Mode

| Feature                    | Non-Strict Mode                                      | Strict Mode                                    |
| -------------------------- | ---------------------------------------------------- | ---------------------------------------------- |
| **Variable Declaration**   | You can assign a variable without declaring it first | Throws an error if a variable is not declared  |
| **Deleting Variables**     | Deleting a variable or function silently fails       | Throws an error                                |
| **Duplicate Parameters**   | Allowed in function definitions                      | Not allowed — causes a syntax error            |
| **`this` in Functions**    | Defaults to the global object (`global` in Node.js)  | `this` is `undefined` in functions             |
| **Octal Literals (`010`)** | Allowed                                              | Not allowed — throws a syntax error            |
| **Reserved Keywords**      | Can be used as variable names                        | Not allowed (`let`, `package`, `public`, etc.) |
| **Security**               | Looser — allows potentially buggy code               | Stricter — prevents unsafe actions             |


1. Undeclared Variable :-

#Non-Strict Mode :
------------------

x = 10;  // No error
console.log(x); // 10

Strict Mode :
-------------

"use strict";
x = 10; // ❌ ReferenceError: x is not defined

----------------------------------------------

2. Duplicate Parameters :-

#Non-Strict Mode :
------------------

function sum(a, a, c) {
  return a + c; // Works but confusing
}
console.log(sum(1, 2, 3)); // 5

#Strict Mode :
--------------

"use strict";
function sum(a, a, c) {} // ❌ SyntaxError: Duplicate parameter name not allowed

---------------------------------------------------------------------------------

3. Using this in Functions

#Non-Strict Mode :
------------------

function show() {
  console.log(this); // refers to global object
}
show();

#Strict Mode :
--------------

"use strict";
function show() {
  console.log(this); // undefined
}
show();

---------------------------------------------------------------------------------

4. Octal Literals

#Non-Strict Mode :
------------------

let num = 010; // interpreted as octal (8)
console.log(num); // 8

#Strict Mode :
--------------

"use strict";
let num = 010; // ❌ SyntaxError: Octal literals are not allowed

---------------------------------------------------------------------------------

Notes as of 10-02-2026

# Node.js & Modules – Quick Notes

## What is Node.js?
- **Node.js** is a JavaScript runtime built on **Chrome’s V8 engine**.
- It allows JavaScript to run **outside the browser**, mainly on servers.
- Node.js follows an **event-driven architecture** and supports **asynchronous I/O**.
- All JavaScript engines follow the **ECMAScript standard**.

### JavaScript Engines
- **V8** – Google Chrome
- **SpiderMonkey** – Firefox

---

## Global Objects
- In **frontend (browser)**:
  - Global object → `window`
  - Also accessible via `this`, `self`, `frames`
- In **Node.js**:
  - Global object → `global`
- **`globalThis`** is the common global object across:
  - Browser
  - Node.js
  - Other JS environments

---

## Modules in Node.js
A module is a file that contains reusable code (variables, functions, classes).

There are **two types of modules** in Node.js:

1. **CommonJS (CJS)**
2. **ES Modules (ESM)**

---

## CommonJS Modules (CJS)
- Default module system in Node.js (older approach)
- Uses:
  - `require()` for importing
  - `module.exports` for exporting
- Runs in **non-strict mode**
- Importing is **synchronous**
- Mostly used in **Node.js backend**

### Example
```js
// export
module.exports = { x, abc };

// import
const data = require("./file");

Different Ways to Export :  
------------------------

module.exports = { x, abc };

module.exports.x = x;
module.exports.abc = abc;

------------------------------------

ES Modules (ESM)

Modern JavaScript module system

Uses:

import / export

Always runs in strict mode

Importing is asynchronous

Commonly used in React, Angular, frontend apps

// export
export const x = 10;
export const abc = () => {};

// import
import { x, abc } from "./file.js";

----------------------------------------------------

Enabling ES Modules in Node.js

To use ES Modules in Node.js, add this to package.json:

{
  "type": "module"
}

After this:

Node treats .js files as ES Modules

import / export will work

--------------------------------------------------------

require() Behavior

require("./file") executes the file immediately

If a file has no exports, it will still run

To access variables/functions from another file:

They must be exported

Otherwise they remain private to that file

-------------------------------------------------------------------------

Key Differences: CommonJS vs ES Modules

| Feature       | CommonJS         | ES Modules          |
| ------------- | ---------------- | ------------------- |
| Import syntax | `require()`      | `import`            |
| Export syntax | `module.exports` | `export`            |
| Strict mode   | No               | Yes                 |
| Import type   | Synchronous      | Asynchronous        |
| Usage         | Node.js (older)  | Modern JS, Frontend |
