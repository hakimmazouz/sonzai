import { EventEmitter } from './EventEmitter'
import {withinRange} from './Helpers'

export class Keyboard extends EventEmitter {
	constructor(immediate) {
		super();
		this.onKeyDown = this.onKeyDown.bind(this)
		this.onKeyUp = this.onKeyUp.bind(this)
		this.rangeEnabled = true;
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

		if (!this.rangeEnabled) return
		Object.keys(this.events).forEach(event => {
			if (event.includes('range')) {
				const range = event.split(':')
				range.shift();

				console.log(keyCode - range[0], this.events[event])
				if (withinRange(keyCode, Number(range[0]), Number(range[1]))) {
					console.log(keyCode, range[0], (keyCode - range[0]) + 1, this.events[event])
					this.events[event].forEach(callback => callback(keyCode - range[0]));
				}
			}
		})
	}

	press(key, callback) {
		this.on(`keydown:${key}`, callback);
	}

	release(key, callback) {
		this.on(`keyup:${key}`, callback);
	}

	onRange(range, callback) {
		this.on(`range:${range[0]}:${range[1]}`, callback);
	}

	disableRange() {
		this.rangeEnabled = false;
	}

	enableRange() {
		this.rangeEnabled = true;
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