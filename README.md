# Nupat Team Phase 2 Intership Task (UIUX Task Dashboard)


## PROJECT DESCRIPTION
The project involves creating a pixel-perfect UIUX Task Dashboard based on a Figma prototype:  [Figma Design](https://www.figma.com/file/QdARXcFMveMaXZU37ZtzhD/%F0%9F%98%B5-Responsive-dashboard-design-using-Auto-Layout-Community?is-community-duplicate=1&fuid=). The dashboard is designed to display data in a clear and concise manner, allowing users to easily monitor and analyze task progress, and add new tasks to the list. The progress of the task list is divided into three categories: Todo, In Progress, and Completed.


- Devloper: Akinbode Olusola David
- start-date: 15th of April, 2023
- Finish-date: 20th of April, 2023

## PROJECT LINK
https://uiuxtaskdashboard.netlify.app/

## REPOSITORY URL
https://github.com/olusolaDav/UIUX-Task-Dashboard

## PROJECT DEPENDENCIES
The application relies on a variety of external resources, including dependencies, frameworks, and tool for building and development;

* Vite - Vite is a build tool similar to Webpack. It can be used for React, Preact, Svelte, Vue, Vanilla JS, and LitElements. Vite is 100 times faster than Webpack and bundles your code with Rollup.
* Javascript - A programming language used for front-end development.
* React.js - Frontend framework for building user interfaces for web and mobile applications.
* tailwindcss - A utility-first CSS framework packed with classes like flex, pt-4, text-center and and some customize classes that can be composed to build any design, directly in UI markup.
* Prop-types - Runtime type checking for React props and similar objects
* react-jss - JSS is an authoring tool for CSS which allows you to use JavaScript to describe styles in a declarative, conflict-free and reusable way.
* react-burger-menu - An off-canvas sidebar component with a collection of effects and styles using CSS transitions and SVG path animations.
* React-router-dom: For configuring routes, to loading and mutating data, to pending and optimistic UI.
* react-collapsible-content - A react liberies for a long sections of information under a block, which enables users to expand and access its features.
* simple-flexbox - A simple way to make responsive layouts using Flexbox in React.
* Autoprefixer - PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use. .
* Postcss - Transform CSS with the power of JavaScript. Auto-prefixing, future CSS syntaxes, modules, linting and more are possible with hundreds of PostCSS plugins.




## HOW TO RUN THE PROJECT LOCALLY
* Clone this repo: 
git clone https://github.com/olusolaDav/UIUX-Task-Dashboard

This project was created using vite (React.js)

* Install the dependencies:
yarn install (if you are using yarn) ||  npm run install (if you are using yarn)

* Run the development server:
yarn run dev (if you installing with npm) || npm run dev (if you install with npm)


## PROJECT STRUCTURE
-----------------------------------------
> Take a look at the project structure.

In the root directory we have:

-node_modules (.gitignore)
- public directory
- src directory
- index.html file
- jsconfig.json file
- postcss.config.js file
- README.md file
- tailwind.config.json file
- vite.config.js file
- yarn log file

In the 'public' directory, we have:

- VectoractivitiesIcon.svg (for the page title logo)


In the 'src' directory we have :

- assests directory : Inside this directory I have where all images and icons used  through out the project it as two subfolders of image and icon, as the directory name implies they both store different file types of images(ong, jpeg etc) and icons(svg, ico, etc)
- components directory: This is where all my components goes into , it as Six subfolders, which are name: 1. collapsible, 2. dashboard, 3. demo, 4. loading, 5. shared, 6. sidebar directory.
- hook directory : This directrory consist of two 'jsx' files that render context used accross the project.
- resources : This directory contains 3 'jsx' files and 2 'js' files that export static data used accross the web application
- routes : This directory contains 3 'jsx' files that render the routes/pages components (both the homepage (dashboard) and the demo pages for the all navigation in the sidebar).
- app.jsx : This render the parent route component
- index.css : contains the tailwind style config and other styles
- main.jsx : this is the app component is been rendered


## Difficulties faced during the project

- I first had challenges on how to structure the 'Task' component code and render the 3 coloumns dynacally.
- I had challenges with the responsiveness, The 'main' component was not rendering full width on the "1440px' and '1920px', It was latter I discover, it was due to a conflict in the 'max-width' declaration. when I patiently inspected the code on broswer's developers tool.
- Due to the fact I'm using tailwind css for the first time, I had to take my time to read the documentation and some video in oder to get familiar with the framework and and this slower my development stage because I have not mastered some of the classes yet.
- Creating the resonsive sidebar also gave me a serious challenge I had to read documentation on liberies that can address.

## What I learnt during the cost of the development

- I learnt new tool such as (tailwindcss, react-jss, react-burger-menu, simple-flexbox, and react-collapsible-content)
- The project made me to improve the way a developer structure code, write resueable and write clean code.
- How to develope mobile first web application the will be resonsive in all screen.
- Tailwindss classes 
- Improve bug fixing


## The following are feasures I added: 

- Responsiveness for all screens (mobile, table and Desktop(1280))
- Collapsible sidebar component
- Routes for the all the navigations on the sidebar and create a dynamic demo page for each of the routes.


## NOTE
This is assessment by NUPAT TEAM to test prospective intern in React stack their skill and attention to detail summing up your ability to reproduce a pixel-perfect implementation of a design on figma and Also how to structure code.