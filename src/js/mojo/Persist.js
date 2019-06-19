export default class Persist {
	static exists(key) {
		return localStorage.getItem(key) || false;
	}
	static get(key) {
		return JSON.parse(localStorage.getItem(key) || false);
	}
	static set(key, value) {
		return localStorage.setItem(key, typeof value === (Object || Array) ? JSON.stringify(value) : value);
	}
}