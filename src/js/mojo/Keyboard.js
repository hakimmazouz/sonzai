import { EventEmitter } from './EventEmitter'

export class Keyboard extends EventEmitter {
	constructor(immediate) {
		super();
		this.onKeyDown = this.onKeyDown.bind(this)
		if (immediate) this.enable();
	}

	onKeyDown({keyCode}) {
		this.emit(keyCode)
	}

	enable() {
		window.addEventListener('keydown', this.onKeyDown)
	}
	
	disable() {
		window.removeEventListener('keydown', this.onKeyDown)
	}
}
export default new Keyboard(true);