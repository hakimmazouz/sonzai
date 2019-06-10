import Sketch from "@/components/Sketch";

export default class TorusLand extends Sketch {

	/**
	 * One time setup for the sketch, called by P5
	 * 
	 * @param {P5 Instance} p 
	 */
	setup(p) {
		this.angle = 0.01;
		this.position = 0;
	}

	/**
	 * Runs on each requestAnimationFrame call, called by P5
	 * 
	 * @param {p5 Instance} p: the current instance of the p5 sketch
	 * @param {Function} updateSketch: calls updateSketch and broadcasts new sketch params to the server
	 */
	draw({tempos, startTime}) {
			const {progress} = tempos.two;
		  background(255);
		  rectMode(CENTER);
		  this.angle += 0.00015;
		  this.position = progress;

		  translate(width/2,height/2, -1200);

		  for (var i = 0; i < 1000; i++) {
		    this.position += 10;
		    
		    push();
		    translate(0, this.position*10, -this.position*10);
		    fill(255*progress, 255, 255);
		    torus(200, 60);
		    
		    pop()

		    rotateZ(QUARTER_PI/2 * Math.sin((startTime - Date.now()) / 10000));
	   	 	rotateX(-QUARTER_PI/2 * Math.cos((startTime - Date.now()) / 10000))
		    
		  }
	}
	
	/**
	 * Runs every time a beat event is emitted from the BPMController
	 * 
	 * @param {BPMController Instance: state}  state.count
	 */
	onBeat({tempo, count, beatDuration}) {
	}
}