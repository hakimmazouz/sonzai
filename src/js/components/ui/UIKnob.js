import UIElement from "../../mojo/UIElement";
import $keyboard from "../../mojo/Keyboard";
import {map, constrain} from '../../mojo/Helpers'

export default class UIKnob extends UIElement {
	constructor($container, handlers = {}, {keys: {increment, decrement}, label = 'Knob', initial = 135, max = 180, min = 45, incrementBy = 1}) {
		this.max = max;
		this.min = min;
		this.initial = initial;
		this.state.value = initial;
		this.label = label;
		this.upKey = increment;
		this.downKey = decrement;
		this.incrementValue = incrementBy;

		super($container, handlers);
	}

	render() {
		this.createKnob();
		this.createLabel();
		this.createTagLabel();
		this.set(this.value)

		this.attachHandlers();
	}

	createKnob() {
		this.$knob = document.createElement('div');
		this.$knob.classList.add('knob');
		this.$el.appendChild(this.$knob)
	}

	createValueLabel() {
		this.$value = document.createElement('h3');
		this.$value.contentEditable = true;
		this.$value.classList.add('label');
		this.$value.innerText = this.value;
	}

	createTagLabel() {
		this.$tag = document.createElement('h4');
		this.$tag.classList.add('tag');
		this.$tag.innerText = this.label;
	}

	render() {
		this.$value.innerText = this.value;
		this.$knob.style.transform = `rotate(${map(this.value, this.min, this.max, -140, 140)}deg)`
	}

	attachHandlers() {
		$keyboard.on(this.upKey, () => {
			this.state.value = constrain(this.value + incrementValue, this.min, this.max)
		})
		$keyboard.on(this.downKey, () => {
			this.state.value = constrain(this.value - incrementValue, this.min, this.max)
		})
	}
}