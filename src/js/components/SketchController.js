import p5 from 'p5'
import Sketch from './Sketch'

export default class SketchController {
	constructor() {
		this.p5 = new p5(Sketch)
	}
}