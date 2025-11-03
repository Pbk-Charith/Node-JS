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

- When you need to run one module in another module only console logs will be executed on the module. if there is Funvtions and some private variables are there the Module protects their variables and functions from leaking into global scope. Then you should use the module export to export it to another module. We have to give the access. 