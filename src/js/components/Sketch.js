export default function Sketch(setup, draw) {
	return function(sketch) {
		sketch.setup = () => setup(sketch);
		sketch.draw = () => draw(sketch);
	}
}