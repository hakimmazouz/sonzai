import Cursor from './mojo/Cursor';

export default class App {
	constructor(el) {
		this.el = el;
		this.cursor = new Cursor(this.el)
	}
}