// Administer breakpoints and use window.mediaMatch

class Screen {
	constructor(window) {
		this.setSize(window)
		window.addEventListener('resize', this.setSize.bind(this))
	}

	setSize({
		innerWidth,
		innerHeight
	}) {
		this.width = window.innerWidth;
		this.height = window.innerHeight;
		this.center = {
			x: this.width / 2,
			y: this.height / 2
		}
		$events.emit('resize', {
			width: this.width,
			height: this.height,
			center: {
				x: this.width / 2,
				y: this.height / 2
			}
		})
	}

	smallestAxis() {
		return this.isLandscape() ? this.height : this.width
	}

	isLandscape() {
		return this.width > this.height
	}
}

export default new Screen(window)