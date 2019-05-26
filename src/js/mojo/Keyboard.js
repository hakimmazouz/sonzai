import $events from './EventEmitter'

export const KEYCODES = {
	SPACEBAR: 32,
	ARROW_LEFT: 37,
	ARROW_RIGHT: 39,
	ARROW_UP: 38,
	ARROW_DOWN: 40,
	ENTER: 13,
	TAB: 9,
	ESCAPE: 27
}

function onKeyUp({keyCode}) {
	Object.values(KEYCODES).map(function (key, index) {
		if (keyCode === key) $events.emit(Object.keys(KEYCODES)[index])
	})
}
window.addEventListener('keyup', onKeyUp);