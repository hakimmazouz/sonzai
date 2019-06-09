import { EventEmitter } from './EventEmitter';

export default class UIElement extends EventEmitter {
	constructor($container, handlers = {}) {
		if (!$container || typeof $container !== 'HTMLElement') throw 'UIElement: An HTMLElement is required as a container.'
		super();
		this.$container = $container;
		this.handlers = handlers;
		this.$el = document.createElement('div');
		this.state = new Proxy({value: this.initial}, {
			set: (state, prop, newValue) => {
				if (state[prop] !== newValue) {
					state[prop] = newValue; 

					if (prop === 'value') {
						if (this.render) this.render();
						this.emit('change', newValue);
						this.emit(`change:${prop}`, newValue);
					} else {
						this.emit('stateChange', newValue);
						this.emit(`stateChange:${prop}`, newValue);
					}
				}
				return true;
			}
		});

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