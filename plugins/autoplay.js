class AutoPlay {
	constructor() {}

	run(media) {
		media.muted();
		media.play();
	}
}

export { AutoPlay };
