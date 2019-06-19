import p5 from 'p5'
import 'p5/lib/addons/p5.sound';
import $events from '@mojo/EventEmitter'
import $io from '@/Sockets'
import $beat from './BeatController'
import Sketches from '@/sketches'
import {EVENTS, ENV} from '@/Const'
import Persist from '@mojo/Persist'
import Sketch3D from './Sketch3D';
import {constrain} from '@mojo/Helpers'
const {UI} = EVENTS;

export class SketchController {
	constructor() {
		this.sketches = Object.keys(Sketches).map(key => new Sketches[key]());
		this.currentSketch = Persist.exists('sketchIndex') ? this.sketches[constrain(Persist.get('sketchIndex'), 0, this.sketches.length - 1)] : this.sketches[0];
		this.init()
		this.attachListeners();
	}
	init() {
		this.p5 = new p5()
		this.renderingMode = this.currentSketch instanceof Sketch3D ? WEBGL : P2D;
		this.setup = this.setup.bind(this)
		window.setup = this.setup;
		this.draw = this.draw.bind(this)
		window.draw = this.draw;
	}
	setup() {
		createCanvas(window.innerWidth, window.innerHeight, this.renderingMode)
		this.currentSketch.setup();
	}
	draw() {
		this.currentSketch.draw($beat);
		$beat.update()
	}
	changeSketch(index) {
		const nextSketch = this.sketches[index];
		Persist.set('sketchIndex', index);
		if (nextSketch instanceof Sketch3D && !(this.currentSketch instanceof Sketch3D)) this.changeRenderer(WEBGL)
		if (!(nextSketch instanceof Sketch3D) && this.currentSketch instanceof Sketch3D) this.changeRenderer(P2D)
		this.currentSketch = nextSketch;
		this.currentSketch.setup();
		$events.emit(EVENTS.SKETCH.SKETCH_CHANGE, index);
	}
	changeRenderer(renderingMode) {
		this.renderingMode = renderingMode
		this.p5.remove();
		requestAnimationFrame(() => {
			this.init();
		})
	}
	attachListeners() {
		window.addEventListener('resize', () => resizeCanvas(window.innerWidth, window.innerHeight))
		if (ENV.IS_HOST) {
			$events.on(UI.SKETCH_CHANGE, newIndex => {
				this.changeSketch(newIndex)
				$io.changeSketch(newIndex)
			})
		} else {
			$io.onSketchChange(newIndex => this.changeSketch(newIndex))
		}
		$beat.on('beat', (beat) => {
			const beatHandlers = this.currentSketch.onBeat(beat);

			if (!beatHandlers) return
			if (beatHandlers.hasOwnProperty(beat.tempo)) {
				beatHandlers[beat.tempo]()
			}
		});
	}
}

export default new SketchController()