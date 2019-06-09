import UIElement from "./UIElement";

export default class UIControl extends UIElement {
	constructor($container, handlers) {
		super($container, handlers);
	}

	setupState() {
		this.state = new Proxy(this.state || {value: undefined}, {
			set: (state, prop, newValue) => {
				if (state[prop] !== newValue) {
					state[prop] = newValue; 
					if (prop === 'value') {
						if (typeof value !== typeof this.initial) {
							throw `UIControl: Attempted to update value of type ${typeof this.initial} with a ${typeof newValue}`
						}
						if (this.$value && this.render) this.render(state);
					} else {
						this.emit('stateChange', newValue);
						this.emit(`stateChange:${prop}`, newValue);
					}
				}
				return true;
			}
		});
	}

	handleChange(value) {
		console.log(value)
		this.state.value = value;
		this.emit(`change:value`, value);
		this.emit('change', value);
	}

	subscribe(callback, event) {
		if (event) {
			this.on(`change:${event}`, callback);
		} else {
			this.on('change', callback);
		}
	}
}