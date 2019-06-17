import Sketch from "@/components/Sketch";

export default class Motherfucker extends Sketch {

	setup() {
		this.padding = 60;
		this.size = 4;
		this.columns = (height - this.padding*2) / this.padding;
		this.rows = (width - this.padding*2) / this.padding;
		this.magneticThreshold = this.padding;
		noStroke();
	}

	draw({tempos}) {
		background(50);
		translate(this.padding, this.padding);
		for (let y = 0; y < this.columns; y++) {
			for (let x = 0; x < this.rows; x++) {
				let offsetX, offsetY;
				let xPos = x*this.padding;
				let yPos = y*this.padding;
				const mouseDistance = {
					x: mouseX - xPos - this.padding,
					y: mouseY - yPos - this.padding
				};


				fill(255)

				if (y === 3 && x === 15 ) {
					fill(255, 0, 255);
					console.log(xPos, this.magneticThreshold, mouseDistance.x)
					console.log(mouseDistance.x, mouseDistance.y, {
						xPos,
						yPos,
						magneticThreshold: this.magneticThreshold,
						willMagnetizeX: mouseDistance.x < this.magneticThreshold,
						witllMagetizeY: mouseDistance.y < this.magneticThreshold, 
						...mouseDistance
					})
				}

				// if (mouseDistance.x < this.magneticThreshold) xPos = 

				ellipse(xPos, yPos, this.size);
			}
		}
	}
	
	onBeat({tempo, count, beatDuration}) {
	}
}