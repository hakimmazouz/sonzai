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
		this.rotationY = 0;
		this.rotationX = 0;
	}

	/**
	 * Runs on each requestAnimationFrame call, called by P5
	 * 
	 * @param {p5 Instance} p: the current instance of the p5 sketch
	 * @param {Function} updateSketch: calls updateSketch and broadcasts new sketch params to the server
	 */
	draw({tempos, startTime}) {
		const {progress} = tempos.two;
		  colorMode(HSL, 255)
		  this.angle += 3;
		  this.position = progress;
		  background(this.angle % 255, 255, 100);
		  rectMode(CENTER);

		  translate(width/2,height/2, -1200);

		  for (var i = 0; i < 1000; i++) {
		    this.position += 10;
		    const z = QUARTER_PI/3 * Math.sin((startTime - Date.now()) / 1000)
		    const x = -QUARTER_PI/3 * Math.cos((startTime - Date.now()) / 1000)
		    push();
			    translate(0, this.position*10, -this.position*10);
			    
			    fill(z * 255, 255, 100);
			    rotateY(this.rotationY)
			    rotateX(this.rotationX)
			    torus(200, 60); 
		    pop()

		    rotateZ(z);
	   	 	rotateX(x)
		    
		  }
	}
	
	/**
	 * Runs every time a beat event is emitted from the BPMController
	 * 
	 * @param {BPMController Instance: state}  state.count
	 */
	onBeat({tempo, count, beatDuration}) {
		return {
			two: () =>  {				
				TweenMax.to(this, beatDuration / 1000, {
					rotationY: random(0, TWO_PI),
					rotationX: random(0, TWO_PI)
				})
			}
		}
	}
}