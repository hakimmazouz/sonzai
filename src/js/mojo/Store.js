import Persist from "./Persist";

export default class Store extends Observable {
	constructor(initialState = {}, config = {persist: false, key: null}) {
		super();
		this.prevState = {};
		this.state = new Proxy(config.persist && Persist.exists(key) ? Persist.get(key) : {...initialState}, {
			set: (state, prop, value) => {
				if (obj[prop] !== value) {
					this.prevState = Object.assign({}, obj);
					obj[prop] = value;
					this.trigger({prevState: this.prevState, state})
					if (config.persist) Persist.set(config.key, obj);
				};
				return true;
			}
		})
	}
	update(key, payload) {
		this.state[key] = payload;
	}
}