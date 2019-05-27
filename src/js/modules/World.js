import SketchController from "../components/SketchController";

export default class World {
	constructor() {
		this.height = 0;
		this.width = 0;
		this.clients = []

		$io.onNewClient(this.onNewClient.bind(this))
		$io.onClientDisconnected(this.onClientDisconnected.bind(this));
		$io.onClientUpdate(this.onClientUpdate.bind(this))
	}

	onNewClient(client) {
		client.x = this.width;
		client.y = 0;
		this.clients.push(client)
		this.updateComposer();
	}

	onClientUpdate({id, ...props}) {
		const index = this.clients.indexOf(this.clients.find(cId => id === cId))
		this.clients[index] = {
			...this.clients[index],
			...props
		}
		this.updateComposer();
	}

	onClientDisconnected(id) {
		const index = this.clients.indexOf(this.clients.find(cId => id === cId))
		this.clients.splice(index, 1)
		this.updateComposer();
	} 

	updateComposer() {
		this.width = this.clients.map(({x, width}) => x+width).sort((a, b) => b-a)[0];
		this.height = this.clients.map(({y, height}) => y+height).sort((a, b) => b-a)[0];
		this.composer.update();
	}
}

class Composer {
	constructor() {
		this.setup();
	}

	setup() {
		this.$el = document.createElement('div');
	}

	update() {

	}

	render() {

	}
}