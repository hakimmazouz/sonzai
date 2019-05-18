import {
	TweenLite
} from 'gsap/all';

export default class Cursor {
	constructor(mountNode) {
		this.$el = document.createElement('div');
		this.$el.classList.add('cursor-layer')

		mountNode.appendChild(this.$el)

		this._attachEventListeners();
	}

	_attachEventListeners() {
		$events.on('mouse', this._onMouseMove.bind(this))
	}

	_onMouseMove({
		x,
		y
	}) {
		console.log('moving mouse')
		TweenLite.to(this.$el, 0.25, {
			x: x - this.$el.offsetWidth / 2,
			y: y - this.$el.offsetHeight / 2,
			ease: Power1.easeOut
		})
	}

	toggle(mode) {
		this.$el.classList.toggle(mode);
	}
}