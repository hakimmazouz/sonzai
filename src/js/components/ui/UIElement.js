import { EventEmitter } from './../../mojo/EventEmitter';

export default class UIElement extends EventEmitter {
	constructor($container) {
		super();
		this.$container = $container;
		this.$el = document.createElement('div');

		this.setupElement();
	}
	
	onChange(callback, event) {
		if (event) {
			this.on(`change:${event}`, callback);
		} else {
			this.on('change', callback);
		}
	}
	
	mount() {
		this.$container.appendChild(this.$el)
		requestAnimationFrame(() => this.emit('mounted', this));
	}

	onMount(callback) {
		this.once('mounted', callback);
	}

	destroy() {
		this.$container.removeChild(this.$el);
		requestAnimationFrame(() => this.emit('destroyed', this));
	}

	onDestroy(callback) {
		this.once('destroyed', callback);
	}

	hide() {
		this.$el.classList.addClass('ui--hidden')
	}

	show() {
		this.$el.classList.removeClass('ui--hidden')
	}
}