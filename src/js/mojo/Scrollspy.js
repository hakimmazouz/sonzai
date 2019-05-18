import {
	debounce
} from 'lodash'

function onWindowWheel({
	deltaY
}) {
	if (window.disableScroll) return
	if (deltaY > 0) {
		$events.emit('scroll-down', deltaY)
	}

	if (deltaY < 0) {
		$events.emit('scroll-up', deltaY)
	}
}

window.addEventListener('wheel', debounce(onWindowWheel, 50, {
	trailing: false,
	leading: true
}));