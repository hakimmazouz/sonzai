import Sketch from '@/components/Sketch'

export default class Sketch3D extends Sketch {
	constructor() {
		super()
	}
	static get isWebGL() {
		return true
	}
}