import {EntityElement} from "./hgl/elements.js"
import {Rect, Point} from "./hgl/geometry.js"


export class SceneElement extends EntityElement {
	constructor() {
		super();
	}

	setRectFromDataset() {
		this.setRectCSS(Rect.fromString(this.dataset.rect));
	}

	set disabled(disabled) {
		this.dataset.disabled = disabled;
		if (!disabled) {
			delete this.dataset.disabled;
		}
	}

	get disabled() {
		return this.dataset.disabled
	}
	
	tick(game) {
		//No-op
	}

	static selector() {
		return "x-sceneelement";
	}
}

export class BlockElement extends SceneElement {
	constructor() {
		super();
	}

	static selector() {
		return "x-location";
	}
}

export class LocationElement extends SceneElement {
	constructor() {
		super();
	}

	static selector() {
		return "x-location";
	}
}

export class ObjectElement extends SceneElement {
	constructor() {
		super();
	}

	tick(game) {
		// Do something here later
	}

	static selector() {
		return "x-object";
	}
}