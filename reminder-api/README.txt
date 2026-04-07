****Executing TypeScript with Node:
==========================================
npm init -y
-------------------
npm i -D ts-node
***"----in the package.json file: add 'ts-node index.ts' on the scrips section
"scritps": {
	"start": "ts-node index.ts"
}
**Then in the terminal to execute TypeScript:
npm start 
=============================================
***//npm setup globally by the command below:
npm i -g npm@10.9.2/
npm i -g ts-node
***To Execute TypeScript:
ts-node index.ts
==============================================
***Setup an Express Project:
=============================
npm i express
----------------------
npm i -D typescript @types/node @types/express
----------------------
tsc --init
---------------------
