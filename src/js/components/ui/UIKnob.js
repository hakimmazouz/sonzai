import $keyboard from "@mojo/Keyboard";
import {map, constrain} from '@mojo/Helpers'
import {KEY_EVENTS} from '@/Const'
import UIControl from "@mojo/ui/UIControl";


export default class UIKnob extends UIControl {
	constructor($container, setupHandlers, {keys: {focus, increment, decrement}, label = 'UIKnob', initial = 135, max = 180, min = 45, incrementBy = 1}) {
		super($container, setupHandlers, initial);
		this.state = {
			max,
			min,
			value: initial,
		}
		this.label = label;
		this.upKey = increment;
		this.downKey = decrement;
		this.focusKey = focus;
		this.incrementValue = incrementBy;

		this.setupState();
		this.setupElement();
		this.setupHandlers();
		this.mount();
	}

	/**
	 * Sets up the dom elements in the knob 
	 * and renders the view with values
	 * @return {void}
	 */
	setupElement() {
		this.$el.classList.add('ui--knob')
		this.createKnob();
		this.createValueLabel();
		this.createTagLabel();
		this.render(this.state);
	}

	/**
	 * Creates the knob element in the knob-control.
	 * 
	 * @return {void}
	 */
	createKnob() {
		this.$knob = document.createElement('div');
		this.$knob.classList.add('knob');
		this.$el.appendChild(this.$knob)
	}

	/**
	 * Creates the input element which holds the current value.
	 * 
	 * @return {void}
	 */
	createValueLabel() {
		this.$value = document.createElement('input');
		this.$value.type = 'text';
		this.$value.classList.add('label');
		this.$el.appendChild(this.$value)
	}

	/**
	 * Creates the label that describes the current
	 * data being changed.
	 * 
	 * @return {void}
	 */
	createTagLabel() {
		this.$tag = document.createElement('h4');
		this.$tag.classList.add('tag');
		this.$tag.innerText = this.label;
		this.$el.appendChild(this.$tag)
	}

	/**
	 * Renders the current state to the view.
	 * 
	 * @return {void}
	 */
	render({value, min, max}) {
		console.log($keyboard.rangeEnabled)
		this.$value.value = value;
		this.$knob.style.transform = `rotate(${map(value, min, max, -140, 140)}deg)`
	}

	/**
	 * Attaches the necessary handlers to the
	 * events for changing the value.
	 * 
	 * @return {void}
	 */
	setupHandlers() {
		$keyboard.press(this.upKey, () => {
			console.log(this.state)
			this.handleChange(constrain(this.state.value + this.incrementValue, this.state.min, this.state.max))
		})
		$keyboard.press(this.downKey, () => {
			this.handleChange(constrain(this.state.value - this.incrementValue, this.state.min, this.state.max))
		})
		$keyboard.release(this.focusKey, () => {
			this.$value.focus();
			this.$value.select();
		})
		$keyboard.release(KEY_EVENTS.ENTER, () => {
			if (this.$value === document.activeElement) {
				this.$value.blur()
			};
		})
		this.$value.addEventListener('input', e => this.handleChange(e.target.value))
		this.$value.addEventListener('focus', e => $keyboard.disableRange())
		this.$value.addEventListener('blur', e => $keyboard.enableRange())
	}
}