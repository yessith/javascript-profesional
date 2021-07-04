class AutoPlay {
	constructor() {}

	run(media) {
		if (!media.muted) {
			media.muted = true;
		}
		media.play();
	}
}

export { AutoPlay };
