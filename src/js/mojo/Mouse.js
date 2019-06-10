import { EventEmitter } from './EventEmitter'

export class Mouse extends EventEmitter {
	constructor(target, immediate) {
		super();
		this.x = target.innerWidth / 2
		this.y = target.innerHeight / 2
		this.onMouseMove = this.onMouseMove.bind(this);
		this.target = target;

		if (immediate) this.enable();
	}

	onMouseMove({
		clientX: x,
		clientY: y
	}) {
		this.emit('mouse', {
			lastX: this.x,
			lastY: this.y,
			x,
			y
		})
		this.x = x
		this.y = y
	}

	enable() {
		this.target.addEventListener('mousemove', this.onMouseMove)
	}

	disable() {
		this.target.removeEventListener('mousemove', this.onMouseMove)
	}
}

export default new Mouse(window)