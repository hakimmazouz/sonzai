import { EventEmitter } from '../EventEmitter';

export default class UIElement extends EventEmitter {
	constructor($container, setupExternalListeners) {
		if (!$container) throw 'UIElement: An HTMLElement is required as a container.'
		super();
		this.$container = $container;
		this.$el = document.createElement('div');

		// if (this.setupHandlers) this.setupHandlers();
		if (setupExternalListeners) setupExternalListeners(this)
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
		this.$el.classList.addClass('ui--is-hidden')
	}

	show() {
		this.$el.classList.removeClass('ui--is-hidden')
	}
}