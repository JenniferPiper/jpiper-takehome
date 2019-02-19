# jpiper-takehome

> A demonstration of some of my front-end development skills. 

*By Jennifer Piper*

--------------------------------
## Installation
1- Clone the repo

`git clone `

2- `npm install` to install npm packages

3- start dev server using `npm start`. The app will open in your default browser.

--------------------------
## Technologies used

Started with [Webpack React Boilerplate by Hashem Khalifa](https://github.com/HashemKhalifa/webpack-react-boilerplate)

Details in [boilerplateReadme.md](./boilerplateReadme.md)

I chose this starter kit because I have used it before with good results, and because it uses most of the same tools I would choose if I were setting up this project from scratch:

* [Webpack 4](https://github.com/webpack/webpack) 
* [Babel 7](https://github.com/babel/babel) [ transforming JSX and ES6,ES7,ES8 ]
* [React](https://github.com/facebook/react) `16.6`
* [Jest](https://github.com/facebook/jest) [ Unit test]
* [Enzyme](http://airbnb.io/enzyme/) for UI testing.
* [Eslint](https://github.com/eslint/eslint/) with airbnb config
* [Style](https://github.com/webpack-contrib/style-loader) & [CSS Loader](https://github.com/webpack-contrib/css-loader) & [SASS-loader](https://github.com/webpack-contrib/sass-loader)
* [React hot loader](https://github.com/gaearon/react-hot-loader)
* [Webpack dev serve](https://github.com/webpack/webpack-dev-server) 

I removed the Prettier code formatter and CSS modules configuration because I don't wish to use them.

## Credits

Background Photo by Graham Page on Unsplash

---------------------------
## Notes

This was super fun. This is absolutely the kind of work I want to be doing.

I chose not to use Redux for this app because I saw no need for a central store for state. In fact a central store could make the control logic more complicated than necessary, and it seemed more straighforward to let each component control its own state and/or the state of its direct descendant. As I built out the app I could find some places where Redux could be useful, so going forward I would consider refactoring to use it.

next steps / improvements:
  - make submenus close on click outside panel, or when parent menu is closed. Currently submenus may still be in open state when a menu is opened.
  - testing: Jest, manual, cross-browser
  - accessibility
  - refactor components to be more DRY. e.g., menu and menu-panel components could be refactored into a single component reusable with different props.
  - organize SCSS into multiple files, better for long-term maintainability
  - grid system such as Bootstrap?
  - There is sometimes a Flash Of Unstyled Content (FOUC). There are solutions for this, some of which are best for production only. 
  Here is a discussion of some solutions I would consider:
  https://stackoverflow.com/questions/36453826/how-to-stop-fouc-when-using-css-loaded-by-webpack 
  The easiest solution could be adding a setTimeout() on the whole App so it delays start, theoretically giving the page time to load. It feels a little hacky from a developer perspective, but could make a smoother user experience, and user experience is almost always more important. There are also better solutions that may take more time to implement.

