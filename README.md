# Specialisation Frontend

This project provides the template for the specialisation in frontend technologies at refugees{code}.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## 1 . Installation
Make sure you have a working installation of NodeJs 8.x. After cloning this project via git, you to download the dependencies by running:

`npm install`

That's it. You should see that there is a new subdirectory called "node_modules".
## 2. Problemsets
We have two groups of problemsets. The first one is about JavaScript only and the second is covers HTML and CSS.
### 2.1 JavaScript
You can find them in `src/app/app-pset-javascript/`. Each problemset has already some unit tests that verify that they work as specified. The unit tests are the files ending with `*.spec.ts`.

You can execute the unit tests by running: `npm run test`

After a while a browser window should open, telling you that all except 1 unit tests have failed. Your task is to implement the required code, so that all tests turn green. 

### 2.2 HTML & CSS
The problems sets for this group is stored in `src/app/app-pset-htmlandcss`. It is your task to create an html page, that looks exactly like the image files in directory `baseline`.

To execute the tests for this problemset, run: `npm run e2e`
