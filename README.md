# Nupat Team Phase 2 Intership Task (UIUX Task Dashboard)


## PROJECT DESCRIPTION
The project involves creating a pixel-perfect UIUX Task Dashboard based on a Figma prototype:  [Figma Design](https://www.figma.com/file/QdARXcFMveMaXZU37ZtzhD/%F0%9F%98%B5-Responsive-dashboard-design-using-Auto-Layout-Community?is-community-duplicate=1&fuid=). 

![Figma Mockup](https://i.ibb.co/GCNj7hk/mockup.png)
*screenshot of the Figma Mockup*

![Breakpoints](https://i.ibb.co/WgkSP7M/Dashboard-breakpoint.png)
*screenshot of the expected breakpoints*

The dashboard is designed to display data in a clear and concise manner, allowing users to easily monitor and analyze task progress, and add new tasks to the list. The progress of the task list is divided into three categories: To-do, In Progress, and Completed.


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
* React-router-dom: For configuring routes, for loading and mutating data, dynamic UI rendering.
* react-collapsible-content - A react liberies for a long sections of information under a block, which enables users to expand and access its features.
* simple-flexbox - A simple way to make responsive layouts using Flexbox in React.
* Autoprefixer - PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use. .
* Postcss - Transform CSS with the power of JavaScript. Auto-prefixing, future CSS syntaxes, modules, linting and more are possible with hundreds of PostCSS plugins.




## HOW TO RUN THE PROJECT LOCALLY
* Clone this repo: 
git clone https://github.com/olusolaDav/UIUX-Task-Dashboard.git

This project was created using vite (React.js)

* Install the dependencies:
yarn install (if you are using yarn) ||  npm run install (if you are using yarn)

* Run the development server:
yarn run dev (if you installing with npm) || npm run dev (if you install with npm)


## PROJECT STRUCTURE (DIRECTORY TREE)
-----------------------------------------
> Take a look at the project structure.

```
├── node_modules (.gitignore)
├── public
|       └── VectoractivitiesIcon.svg
├── src
│   ├── assets
|   |   ├── incons   
│   │   |   ├── (...svg files and jsx files)
|   |   ├── images   
│   │   |   ├── (...png files)
│   ├── components
│   │   ├── collapsible
│   │   │   ├── CollapsibleContent.jsx
|   |   ├── dashboard   
│   │   |   ├── header
|   |   |   |   ├── Header.jsx
│   │   |   ├── navBar
|   |   |   |   ├── List.jsx
|   |   |   |   ├── NavBar.jsx
|   |   |   |   ├── NavList.jsx
│   │   |   ├── task
|   |   |   |   ├── TaskComponent.jsx
|   |   |   |   ├── taskList.jsx
|   |   |   |   ├── TaskSection.jsx
│   │   |   ├── index.jsx
│   │   ├── demo
│   │   │   ├── DemoPage.jsx
│   │   ├── loading
│   │   │   ├── index.jsx
│   │   │   ├── LoadingComponent.jsx
│   │   ├── shared
│   │   |   ├── button
|   |   |   |   ├── Button.jsx
│   │   |   ├── card
|   |   |   |   ├── Card.jsx
│   │   |   ├── cardProgress
|   |   |   |   ├── cardProgress.jsx
│   │   |   ├── cardTitle
|   |   |   |   ├── CardTitle.jsx
│   │   |   ├── label
|   |   |   |   ├── Label.jsx
│   │   |   ├── members
|   |   |   |   ├── Members.jsx
│   │   ├── sidebar
│   │   |   ├── index.jsx
│   │   |   ├── LogoComponent.jsx
│   │   |   ├── MenuComponent.jsx
│   │   |   ├── MenuItems.jsx
│   │   |   ├── SidebarComponent.jsx
│   │   |   ├── SidebarContext.jsx
│   ├── hooks
│   │   ├── useSidebar.jsx
│   │   ├── useWindowSize.jsx
│   ├── resources
│   │   ├── navLinks.jsx
│   │   ├── Profile.jsx
│   │   ├── routes.js
│   │   ├── theme.js
│   │   ├── utilities.jsx
│   ├── routes
│   │   ├── index.jsx
│   │   ├── PrivateRoutes.jsx
│   │   ├── PrivateSection.jsx
│   │   ├── PublicRoutes.js
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .gitignore
├── index.html
├── jsconfig.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── vite.config.js
├── yarn-error.log
└── yarn.lock
```

### In the root directory we have:

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

### In the 'public' directory, we have:

- VectoractivitiesIcon.svg (for the page title logo)


### In the 'src' directory we have :

- assests directory : Inside this directory we have all images and icons used  through out the project it as two subfolders of images and icons, as the directory name implies they both store different file types of images(png, jpeg etc) and icons(svg, ico, etc)

- components directory: This is where all the components goes into , it as Six subdirectory, which are name: 
1. collapsible: this contain a 'jsx' file that rendered the logic for the collapsable sidebar
2. dashboard: this contain 3 subfolders and 1 index.jsx file that exports (rendered) the HOME PAGE components. 
3. demo: this contain a 'jsx' file that rendered that dynamically rendered demo pages of the sidebar's navigation to the DOM.
4. loading: This contain 2 'jsx' files that renders the loading gif to the DOM.
5. shared: this contains 6 subfolders that holds all components that are used across the whole web application.
6. sidebar: this directory contains 6 'jsx' files that renders the sidebar to the DOM.

- hook directory : This directrory consist of two 'jsx' files that render context components used accross the project.
- resources : This directory contains 3 'jsx' files and 2 'js' files that export static data used accross the web application
- routes : This directory contains 3 'jsx' files that render the routes/pages components (both the homepage (dashboard) and the demo pages for the all navigation in the sidebar).

### root & config files  , postcss.config.json etc) :
- app.jsx : This render the parent route component
- index.css : contains the tailwind style config and other styles
- main.jsx : works as the entry point of the application. It uses ReactDOM.render to render App to the root 'id' in the index.html
- index.html: the only html file in the project directory, it contain a 'root' div element in the body that is rendered to the DOM.  
- package.json: This is the heart of any Node project. It records important metadata about a project which is required before publishing to NPM, and also defines functional attributes of a project that npm uses to install dependencies, run scripts, and identify the entry point to our package.
- tailwind.config.json: To define any customizations of tailwindcss use in the project


## PROJECT OUTCOME (SCREENSHOT OF RENDERED SCREENS)
-----------------------------------------
> Take a look at output screenshot.
![1280px Breakpoint](https://i.ibb.co/Y7kygjS/1280-size.png)
*1280px Breakpoin*

![1440px Breakpoint](https://i.ibb.co/Mn87LX5/1440-size.png)
*1440px Breakpoint*

![1920px Breakpoint](https://i.ibb.co/TwzrTkc/1920.png)
*1920px Breakpoint*


## FEATURES ADDED
-----------------------------------------
> Take a look at the screenshot of features added.

### Responsiveness for all screens (mobile, table and Desktop(1280px, 1440px & 1920px))
![Mobile view iPhone 12pro](https://i.ibb.co/zXNHNZZ/mobile-iphone12.png)
*The Mobile view iPhone 12pro screenshot*

![Tablet view ipad Air](https://i.ibb.co/zHxdbWs/ipad-Air-screen.png)
*Tablet view ipad Air screenshot*

![Mid-screen 760px](https://i.ibb.co/2hCDJQZ/md-760-size.png)
*Mid-screen 760px screenshot*


### Collapsible sidebar component (The sidebar component will collapse from Mid-screen 1080px)
The sidebar will be visible (expanded when user click on the 'burger-menu' button and will collapse when user click on the overlay component)
![Collapsed sidebar on 1000px screen](https://i.ibb.co/S3KMMZC/1000-width-collapsesidebar.png)
*Collapsed sidebar on 1000px screen*

![Expanded sidebar on 1000px screen](https://i.ibb.co/qrw6SVt/100width-expanded-sidebar.png)
*Expanded sidebar on 1000px screen*

![Collapsed Sidebar on iPhone 12pro screen](https://i.ibb.co/zXNHNZZ/mobile-iphone12.png)
*Collapsed Sidebar on iPhone 12pro screen*

![Expanded Sidebar on iPhone 12pro screen](https://i.ibb.co/9sySnyg/mobile-button.png)
*Expanded Sidebar on iPhone 12pro screen*

### Routes for the all the navigations on the sidebar and created a dynamic demo page for each of the routes.
![Home page "dashboard routes"](https://i.ibb.co/XDFC6Jf/homepage.png)
*Home page "dashboard routes"*

![Setting routes 'Demo page'](https://i.ibb.co/3BdQDmv/settings.png)
*Setting routes 'Demo page'*

![Users routes 'Demo page'](https://i.ibb.co/rx782Jw/userNew.png)
*Users routes 'Demo page'*

![Activities routes 'Demo page'](https://i.ibb.co/FYPrwYV/activities.png)
*Activities routes 'Demo page'*

![Profille routes 'Demo page'](https://i.ibb.co/Zdb6kTg/profile.png)
*Profille routes 'Demo page'*

![Logout routes 'Demo page'](https://i.ibb.co/VHRCSQj/log-out.png)
*Logout routes 'Demo page'*

![ADD PROJECT routes 'Demo page'](https://i.ibb.co/Js5hnv6/add-project.png)
*ADD PROJECT routes 'Demo page'*




## DIFFICULTIES DURING DEVELOPMENT

-At first, I faced challenges in structuring the code for the 'Task' component and dynamically rendering the three columns.
-I initially encountered challenges with responsiveness; the 'main' component was not rendering in full width on the '1440px' and '1920px' screen sizes. It was later discovered that this was due to a conflict in the 'max-width' with the help of built-in developer tool in the my browser.
-As this was my first time using Tailwind CSS, I had to take my time to read through the documentation and watch some videos to become familiar with the framework. This slowed down my development stage, as I had not yet mastered some of the classes.
-I also encountered a serious challenge while creating the responsive sidebar, and had to read through the documentation on libraries that could address the issue.

## WHAT I LEARN'T IN THE COURSE OF THE DEVELOPMENT

-I learned how to use several new tools, including Tailwind CSS, React-JSS, React-Burger-Menu, Simple-Flexbox, and React-Collapsible-Content.
-The project helped me improve the way I structure code, write reusable code, and maintain clean code practices.
-The project helped me learn how to develop a mobile-first web application that is responsive on all screen sizes.
- Improve bug fixing expecially the 'styles' in developer tools


## NOTE
This is assessment by NUPAT TEAM to test prospective intern in React stack their skill and attention to detail summing up your ability to reproduce a pixel-perfect implementation of a design on figma and Also how to structure code.