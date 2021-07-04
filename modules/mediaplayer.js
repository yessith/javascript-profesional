class MediaPlayer {
	constructor(config) {
		this.media = config.element;
		this.plugins = config.collectionplugins || [];
		this._initPlugins();
	}
	// Initialization de plugins
	_initPlugins() {
		const player = {
			play: () => this.play(),
			pause: () => this.pause(),
			media: this.media,
			get muted() {
				return this.media.muted;
			},
			set muted(value) {
				this.media.muted = value;
			},
		};

		this.plugins.forEach((plugin) => {
			plugin.run(player);
		});
	}

	// Métodos para pausar y reproducir el video
	play() {
		this.media.play();
	}
	pause() {
		this.media.pause();
	}
	togglePlay() {
		this.media.paused ? this.play() : this.pause();
		console.log(this.media);
	}

	// Métodos para silenciar y oir el video
	muted() {
		this.media.muted = true;
	}
	unMuted() {
		this.media.muted = false;
	}
	toggleMuted() {
		this.media.muted ? this.unMuted() : this.muted();
	}
}

export { MediaPlayer };
