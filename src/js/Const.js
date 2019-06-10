export const BREAKPOINTS = {
	SMALL: 768,
	MEDIUM: 992,
	LARGE: 1365,
	XLARGE: 1600
}

export const EVENTS = {
	UI: {
		BPM_CHANGE: 'ui:bpm-change',
		SKETCH_CHANGE: 'ui:sketch-change',
		MASTER_TEMPO_CHANGE: 'ui:master-tempo-change',
	},
	SKETCH: {
		SKETCH_CHANGE: 'sketch:sketch-change'
	},
	SOCKET: {
		SLAVE_CONNECTED: 'socket:slave-connected',
		BPM_CHANGE: 'host:bpm-change',
		BPM_SYNC: 'host:bpm-sync',
		SKETCH_CHANGE: 'host:sketch-change',
		MASTER_TEMPO_CHANGE: 'host:master-tempo-change'
	},
}

export const ENV = {
	IS_HOST: window.location.hostname.includes('localhost')
}

export const BPM = {
	MIN: 35,
	MAX: 180
}

export const KEY_EVENTS = {
	SPACEBAR: 32,
	ARROW_LEFT: 37,
	ARROW_RIGHT: 39,
	ARROW_UP: 38,
	ARROW_DOWN: 40,
	ENTER: 13,
	TAB: 9,
	ESCAPE: 27,
	NUMBER_ROW: [49,57],
}

export const TEMPO_CONFIG = {
	two: {
		progress: 0,
		count: 0,
		label: '1/2',
		beatDuration: function() {
			return  this.getBaseTempo() * 2
		}
	},
	four: {
		progress: 0,
		count: 0,
		label: '1/4',
		beatDuration: function() {
			return  this.getBaseTempo()
		}
	},
	eight: {
		progress: 0,
		count: 0,
		label: '1/8',
		beatDuration: function() {
			return  this.getBaseTempo() * 0.5
		}
	},
	sixteen: {
		progress: 0,
		count: 0,
		label: '1/16',
		beatDuration: function() {
			return  this.getBaseTempo() * 0.25
		}
	}
}

export const TEMPOS = function() {
	const temposObject = {}
	for (const key in TEMPO_CONFIG) {
		temposObject[key.toUpperCase()] = key
	}
	return temposObject
}();