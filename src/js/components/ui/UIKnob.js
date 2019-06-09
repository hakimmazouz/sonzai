import $keyboard from "../../mojo/Keyboard";
import {map, constrain} from '../../mojo/Helpers'
import UIControl from "../../mojo/ui/UIControl";

export default class UIKnob extends UIControl {
	constructor($container, setupHandlers, {keys: {increment, decrement}, label = 'UIKnob', initial = 135, max = 180, min = 45, incrementBy = 1}) {
		super($container, setupHandlers, initial);
		this.state = {
			max,
			min,
			value: initial,
		}
		this.label = label;
		this.upKey = increment;
		this.downKey = decrement;
		this.incrementValue = incrementBy;
		super.setupState();
		this.setupElement();
		this.setupHandlers();
		this.mount();
	}

	setupElement() {
		this.$el.classList.add('ui--knob')
		this.createKnob();
		this.createValueLabel();
		this.createTagLabel();
		console.log(this.state)
		this.render(this.state);
	}

	createKnob() {
		this.$knob = document.createElement('div');
		this.$knob.classList.add('knob');
		this.$el.appendChild(this.$knob)
	}

	createValueLabel() {
		this.$value = document.createElement('input');
		this.$value.type = 'text';
		this.$value.classList.add('label');
		this.$el.appendChild(this.$value)
	}

	createTagLabel() {
		this.$tag = document.createElement('h4');
		this.$tag.classList.add('tag');
		this.$tag.innerText = this.label;
		this.$el.appendChild(this.$tag)
	}

	render({value, min, max}) {
		this.$value.value = value;
		this.$knob.style.transform = `rotate(${map(value, min, max, -140, 140)}deg)`
	}

	setupHandlers() {
		$keyboard.on(this.upKey, () => {
			console.log(this.state)
			this.handleChange(constrain(this.state.value + this.incrementValue, this.state.min, this.state.max))
		})
		$keyboard.on(this.downKey, () => {
			this.handleChange(constrain(this.state.value - this.incrementValue, this.state.min, this.state.max))
		})
		this.$value.addEventListener('input', e => this.handleChange(e.target.value))
	}
}