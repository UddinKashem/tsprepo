# Practice Type Script
/*TypeScript Info
*/
///...args(spread operator)
----------------------
https://www.typescriptlang.org/docs/handbook/decorators.html
1. Check Node Version: from CMD
node -v

2. Install TypeScript:
npm install -g typescript

3. Check Typescript Version:
tsc -v

###Open Tenminal in VS Code:
CTRL+ `

Ctrl+Shift+P (Windows/Linux)
##Configure TypeScript Configure:
tsc --init
---------------------------
//Execute Typescript:
tsc
//Execute JavaScript:
node dist/index.js
------------------
//Compile the Typescript in SIngle command:
tsc & node dist/index/js

//*** To Move Section of Code Ups and Down Select the code and 
ALT + UpArrowKey/DownArrowKey

//Interface Implements: to implements methods from interface:
---------------------
"CTRL + ."
//==========================
//Remove unused declaration class from import list:
Select the the class name-> "CTRL + ."
import {Circle, Square} from './shape'

***========Install Definitely Types Declaration==========
npm i - lodash
npm i --save-dev @types/lodash/npm i -D @types/lodash
npm i chalk