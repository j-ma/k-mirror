# k-mirror
Angular web application for k-pop dance mirror videos from YouTube.
- - - -

### Prerequisites

You must have Node.js and npm installed. You can install them from [http://blog.npmjs.org/post/85484771375/how-to-install-npm](npm).

### Install packages

* We get the tools we depend upon via `npm`, the Node Package Manager.

Using `npm` from the command line, install the packages listed in package.json with the command:

```
npm install
```

You should now have two new folders in your project:

* `node_modules` contains the npm packages for the tools we need.
* `typings` contains additional definition files for libraries that the TypeScript compiler doesn't natively recognize.

### Build and run the application

Open a terminal window and enter this command:

```
npm start
```

That command runs the following two parallel node processes:

* The TypeScript compiler in watch mode.
* A static file server called lite-server that loads index.html in a browser and refreshes the browser when application files change.
