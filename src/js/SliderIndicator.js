import {
	Container,
	Graphics
} from 'pixi.js'
import {
	EVENTS
} from './Const'
import {
	TweenMax,
	Power2
} from 'gsap/all'
import {
	interpolate
} from '@popmotion/popcorn'


export default class SliderIndicator extends Container {
	constructor(slider) {
		super()
		this.CONST = {
			MAX_HEIGHT: 200,
			PROGRESS_COLOR: 0xFFFFFF
		}

		this._mapProgressToHeight = interpolate([0, slider.max], [this.CONST.MAX_HEIGHT / slider.max + 1, this.CONST.MAX_HEIGHT])
		this._initShapes(slider)
		this._attachEventListeners()
	}

	_initShapes(slider) {
		this.elements = {
			background: new Graphics().beginFill(0xFFFFFF, 0.25).drawRoundedRect(0, 0, 5, this.CONST.MAX_HEIGHT, 2).endFill(),
			progress: new Graphics().beginFill(0xFFFFFF).drawRoundedRect(0, 0, 5, this.CONST.MAX_HEIGHT, 2).endFill()
		}
		this.elements.progress.height = this._mapProgressToHeight(slider.index)
		this.addChild(...Object.values(this.elements))
	}

	_handleSlideChange(slider) {
		if (slider.index > slider.previous) {
			TweenMax.to(this.elements.progress, 0.5, {
				pixi: {
					height: 0,
					y: this.CONST.MAX_HEIGHT
				},
				ease: Power2.easeIn,
				onComplete: () => {
					TweenMax.set(this.elements.progress, {
						pixi: {
							y: 0
						}
					})
					TweenMax.to(this.elements.progress, 0.5, {
						pixi: {
							height: this._mapProgressToHeight(slider.index)
						},
						ease: Power2.easeOut
					})
				}
			})
		} else {
			TweenMax.to(this.elements.progress, 0.5, {
				pixi: {
					height: 0,
					y: 0
				},
				ease: Power2.easeIn,
				onComplete: () => {
					TweenMax.set(this.elements.progress, {
						pixi: {
							y: this.CONST.MAX_HEIGHT
						}
					})
					TweenMax.to(this.elements.progress, 0.5, {
						pixi: {
							y: 0,
							height: this._mapProgressToHeight(slider.index)
						},
						ease: Power2.easeOut
					})
				}
			})
		}

	}

	_attachEventListeners() {
		$events.on(EVENTS.SLIDER_CHANGE, this._handleSlideChange.bind(this))
	}
}