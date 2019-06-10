import { EventEmitter } from './EventEmitter'

export class Keyboard extends EventEmitter {
	constructor(immediate) {
		super();
		this.onKeyDown = this.onKeyDown.bind(this)
		this.onKeyUp = this.onKeyUp.bind(this)
		if (immediate) this.enable();
	}

	onKeyDown({keyCode, key}) {
		this.emit(keyCode)
		this.emit(`keydown:${key}`);
		this.emit(`keydown:${keyCode}`);
	}

	onKeyUp({keyCode, key}) {
		this.emit(keyCode)
		this.emit(`keyup:${key}`);
		this.emit(`keyup:${keyCode}`);
	}

	press(key, callback) {
		this.on(`keydown:${key}`, callback);
	}

	release(key, callback) {
		this.on(`keyup:${key}`, callback);
	}

	enable() {
		window.addEventListener('keydown', this.onKeyDown)
		window.addEventListener('keyup', this.onKeyUp)
	}
	
	disable() {
		window.removeEventListener('keydown', this.onKeyDown)
		window.removeEventListener('keyup', this.onKeyUp)
	}
}
export default new Keyboard(true);