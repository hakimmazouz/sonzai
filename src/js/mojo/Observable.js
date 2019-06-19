export default class Observable {
	constructor(){
		this.observers = []
	}
	subscribe(observer) {
		this.observers.push(observer)
	}
	unsubscribe(callback) {
		this.observers.splice(this.observers.indexOf(callback), 1);
	}
	trigger(payload) {
		this.observers.filter(o => o).forEach(o => o(payload))
	}
}