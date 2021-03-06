import {EntityElement} from "./hgl/elements.js"
import {Rect, Point} from "./hgl/geometry.js"


export class SceneChildElement extends EntityElement {
	constructor() {
		super();
	}

	setRectFromDataset() {
		this.setRectCSS(Rect.fromString(this.dataset.rect));
	}

	set disabled(disabled) {
		this._disabled = disabled;
		if (disabled) {
			this.dataset.disabled = "disabled";
		} else {
			delete this.dataset.disabled;
		}
	}

	get disabled() {
		return this._disabled;
	}

	disable() {
		this.disabled = true;
	}

	enable() {
		this.disabled = false;
	}
	
	tick(game) {
		//No-op
	}

	static selector() {
		return "x-scenechildelement";
	}
}

export class BlockElement extends SceneChildElement {
	constructor() {
		super();
	}

	static selector() {
		return "x-block";
	}
}

export class LocationElement extends SceneChildElement {
	constructor() {
		super();
	}

	static selector() {
		return "x-location";
	}
}

export class ObjectElement extends SceneChildElement {
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