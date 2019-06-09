import { EventEmitter } from "./EventEmitter";

function ScrollSpyEvent (data) {
	return data;
}

export class ScrollSpy extends EventEmitter {
	constructor(immediate) {
		super()
		this.lastY = window.scrollY;
		this.onScroll = this.onScroll.bind(this);

		if (immediate) this.enable();
	}

	onScroll() {
		let direction, lastY, y, deltaY, timeDelta;

		y = window.scrollY;
		deltaY = this.lastY - y;
		direction = deltaY > 0 ? 1 : -1;
		timeDelta = Date.now() - this.startTime;


		this.emit('scroll', new ScrollSpyEvent({deltaY, timeDelta, direction, lastY, y}) )

		this.lastY = y;
		this.startTime = Date.now()
	}

	enable() {
		window.addEventListener('scroll', this.onScroll);
	}

	disable() {
		window.removeEventListener('scroll', this.onScroll);
	}
}

export default new ScrollSpy(true);