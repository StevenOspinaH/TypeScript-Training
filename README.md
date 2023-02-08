# TypeScript-Training

This training is focused on Typescript language. The main advantages of TS are:

1. Strict Typing
2. Structural Typing
3. Type annotations.
4. Type Inference

## Getting Started

Now, create the project and the package.json:

`npm init -y`

To download TypeScript into your project.

`npm install typescript --save-dev`

Check installed version:

`npx tsc --version`

Create the tsconfig.json for the typescript project:

`npx tsc --init`

To enable errors in your JavaScript files add: `// @ts-check` to the first line in your .js files to have TypeScript raise it as an error.

To install ts-node locally:

`npm install -D ts-node`

## Task 2.1: Basic Request using Axios

Install axios:

`npm install axios --save-dev`

Running the code using the transpiler:

`npm run start`

Running using `ts-node`:

`npm run ts-node`

## Task 3: Unit Test

Install mocha/cahi and the declarations types:

`npm install -D mocha chai @types/mocha @types/chai`

Running unit test with mocha/chai:

`npm run test:mocha`
