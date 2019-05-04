# react-boilerplate
A react boilerplate with webpack 4

Simple react.js boilerplate with custom weback.config file.

Contains redux, css and sass loaders, as well as standard practices for modularizing react code.


# Getting started
### Installation
```
git clone https://github.com/howardwang15/react-boilerplate.git
cd react-boilerplate
npm install
npm start
```
By default, the application will be running at http://localhost:8000

### Changing Port
To change the port the application will run on, go into the webpack.config.js file and locate the line (in the devServer object)
```
port: 8000
```
Change that number to another port

### Removing .gitkeep files
Remove the .gitkeep files inside the actions, components, constants, and containers directories. The .gitkeep files were there to allow git to track those folders 

### Generating static files for production
By default, the boilerplate uses webpack to generate static files
```
npm run build
```
The static files will be stored in the /dist directory

### Deploying
1. First build with npm run build
2. Then cd into dist
3. Then run surge
    It will ask for username and password maybe, message hakan if it does and he will tell you them
    website is mappening-internal-site.surge.sh
