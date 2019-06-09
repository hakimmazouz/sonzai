export const BREAKPOINTS = {
	SMALL: 768,
	MEDIUM: 992,
	LARGE: 1365,
	XLARGE: 1600
}

export const SOCKET_EVENTS = {
	HOST_UPDATE: 'host-update',
	HOST_UPDATED: 'host-updated',
	CONNECTED: 'connected',
	UPDATE_SLAVES: 'update-slaves',
}

export const EVENTS = {
	
}

export const ENV = {
	IS_HOST: window.location.hostname.includes('localhost')
}