import { MediaPlayer } from '../modules/mediaplayer.js';
import { AutoPlay } from '../plugins/autoplay.js';

const videoElement = document.querySelector('video');
const playButton = document.querySelector('#play-btn');
const mutedButton = document.querySelector('#muted-btn');

const config = {
	element: videoElement,
	collectionplugins: [new AutoPlay()],
};

const handlePlayer = new MediaPlayer(config);

const playVideo = () => handlePlayer.togglePlay();

const mutedVideo = () => handlePlayer.toggleMuted();

playButton.addEventListener('click', playVideo);
mutedButton.addEventListener('click', mutedVideo);
