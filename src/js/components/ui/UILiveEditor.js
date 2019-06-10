import UIElement from '@mojo/ui/UIElement'
import $sketch from '@/components/SketchController'

export default class UILiveEditor extends UIElement {
	constructor($container) {
		super($container);
		setTimeout(() => {
			console.log($sketch.currentSketch.setup.toString())
			this.innerText = $sketch.currentSketch.setup.toString();
		}, 1000)
	}
}