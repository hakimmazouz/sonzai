import UIControl from '@mojo/ui/UIControl'
import $events from '@mojo/EventEmitter'
import $keyboard from '@mojo/Keyboard'
import ScrollToPlugin from "gsap/ScrollToPlugin";﻿
import {EVENTS, KEY_EVENTS} from '@/Const'

(ScrollToPlugin)

export default class UISelect extends UIControl {
	constructor($container, setupExternalHandlers, {
		options = ['First option', 'second option'],
		initial = 0,
		keys = {next: 'o', prev: 'p'},
		tag = 'Select element',
	}) {
		super($container, setupExternalHandlers)
		this.state = {
			value: initial,
			expanded: true,
			initial,
			tag,
			options
		}

		this.setupState();
		this.setupElement();
		this.setupHandlers();
		this.mount();
	}

	setupElement() {
		this.$el.classList.add('ui--select')
		this.createContent();
		this.createTagLabel();
	}

	createContent() {
		this.$content = document.createElement('ul');
		this.$content.classList.add('items')
		this.$content.innerHTML = this.state.options.map((option, index) => `<li data-index="${index}" class="${['item', this.state.value === index ? 'selected' : null].join(' ')}">${option}</li>`).join('')
		this.$options = this.$content.getElementsByClassName('item');
		this.$el.appendChild(this.$content)
	}

	createTagLabel() {
		this.$tag = document.createElement('h4');
		this.$tag.innerText = this.state.tag;
		this.$tag.classList.add('tag');
		this.$el.appendChild(this.$tag);
	}

	render({value}) {
		for (let item of this.$options) {
			if (Number(item.dataset.index) === value) {
				item.classList.add('selected')
				TweenMax.to(this.$content, 0.25, {
					scrollTo: {
						y: '.selected'
					}
				})
			} else {
				item.classList.remove('selected');
			}
		}
	}

	expand() {
		// TweenMax.set(this.$content, {
		// 	height: 'auto',
		// 	onComplete: () => {
		// 		TweenMax.from(this.$content, 5, {
		// 			height: this.$options[0].offsetHeight,
		// 			onComplete: () => {
		// 				this.state.expanded = true
		// 			}
		// 		})
		// 	}
		// })

		TweenMax.to(this.$content, 0.25, {
			height: this.$content.scrollHeight,
			onComplete: () => {
				this.state.expanded = true
			}
		})

	}

	collapse() {
		TweenMax.to(this.$content, 0.25, {
			height: this.$options[0].offsetHeight,
			scrollTo: {
				y: '.selected'
			},
			onUpdate: () => {
				TweenMax.to(this.$content, 0.15, {
					scrollTo: {
						y: '.selected'
					},
				})	
			},
			onComplete: () => {
				this.state.expanded = false
			}
		})
	}

	getSelectedItem() {
		return this.$content.querySelector('.selected');
	}

	setupHandlers() {
		// $keyboard.onRange(KEY_EVENTS.NUMBER_ROW, (value) => {
		// 	this.handleChange(this.state.options[value-1]);
		// })

		this.$el.addEventListener('mouseenter', event => {
			if (!this.state.expanded) this.expand()
		})
		this.$el.addEventListener('mouseleave', event => {
			if (this.state.expanded) this.collapse()
		})
		this.$content.addEventListener('click', event => {
			if (!this.state.expanded) return
			if (!event.target.contains(this.getSelectedItem())) {
				this.handleChange(Number(event.target.dataset.index));
			}
		})
	}
}