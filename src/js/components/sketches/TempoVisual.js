import Sketch from "../Sketch";
import { TweenLite } from "gsap";

export default class TempoVisual extends Sketch {
	setup() {
		fill(100, 100, 180)
		this.state = {
			redValue: 0
		}
		noStroke();
	}  

	draw({tempos}) {
		const rectWidth = Math.ceil(width/Object.keys(tempos).length);
		background(
			// map(tempos[tempos.master].progress, 0, 1, 0, 255),
			this.state.redValue,
			0,
			144
		);

		Object.keys(tempos).forEach((key, index) => {
			if (key === 'master') {
				rect(index * rectWidth, 0, rectWidth, map(tempos[tempos.master].progress, 0, 1, 0, height));
			} else {
				rect(index * rectWidth, 0, rectWidth, map(tempos[key].progress, 0, 1, 0, height));	
			}
		})
	}

	onBeat({key, tempo, count, beatDuration}) {
		return {
			four: () => {
				TweenLite.to(this.state, beatDuration() / 1000, {
					redValue: count % 2  === 0 ? 0 : 255
				})
			}
		}
	}
}