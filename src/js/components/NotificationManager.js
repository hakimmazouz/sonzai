import { TweenLite, Power1, Bounce } from "gsap";

export default class NotificationManager {
	constructor(mountingNode) {
		this.setup();
	}

	setup() {
		this.$el = document.createElement('div');
		this.$el.id = 'notification-container';
		document.body.appendChild(this.$el)
	}

	toggle(props) {
		const {duration = 3} = props;
		this.$el.innerHTML = this.render(props)

		TweenLite.from(this.$el.firstElementChild, 0.5, {
			y: this.$el.firstElementChild.offsetHeight,
			autoAlpha: 0,
			ease: Back.easeOut,
			onComplete: () => {
				TweenLite.to(this.$el, 0.25, {
					y: this.$el.firstElementChild.offsetHeight,
					autoAlpha: 0,
					ease: Power2.easeIn,
					delay: 0.5 + duration,
					onComplete: () => {
						this.$el.innerHTML = ''
					}
				})
			}
		})
	}

	render(props) {
		const {header, content, icon = 'default'} = props;
		return `
			<div class="notification">
				<span class="icon icon--${icon}"></span>
				<div class="info">
					<h3 class="header">${header}</h3>
					<p class="content">${content}</p>
				</div>
			</div>
		`
	}
}