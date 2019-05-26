import $events from './EventEmitter'

class Mouse {
	constructor(target) {
		this.x = target.innerWidth / 2
		this.y = target.innerHeight / 2
		target.addEventListener('mousemove', this.updateMouse.bind(this))
	}

	updateMouse({
		clientX,
		clientY
	}) {
		this.x = clientX
		this.y = clientY
		$events.emit('mouse', {
			x: this.x,
			y: this.y
		})
	}
}

export default new Mouse(window)