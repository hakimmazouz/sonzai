/**
 * Loading Babel polyfill before everything else so we can use the new sweet, sweet ES6/7 features
 */
import '@babel/polyfill'

/**
 * Loading the main SCSS file which is the entry point for the rest of the SCSS files
 */
import './style/style.scss'

/**
 * Loading and globalising an instance of tiny-emitter
 */
import './js/mojo/EventEmitter'

/**
 * Loading and globalising the scrollspy that tracks the use of wheel
 */
import './js/mojo/Scrollspy'

/**
 * Loading and globalising the keyboard listener with keycodes that match event names
 */
import './js/mojo/Keyboard'

/**
 * Loading and globalising the mouse listener with coordinates for the mouse position
 */
import './js/mojo/Mouse'

/**
 * Loading the main App that runs everything
 */
import App from './js/App'

window.$app = new App(document.getElementById('app'))