const SpeechRecognition = SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
let word = '';

export function startRecognition() {
	recognition.start();
}

export function stopRecognition() {
	recognition.stop();
	console.log('called stop');
}

export function getRecognition() {
	return recognition;
}

recognition.addEventListener('result', (event) => {
	word = event.results[0][0].transcript;
	if (word === 'quit') {
		console.log('[Recognition] Speech Recognition Stopped');
		recognition.stop();
	}
});

recognition.addEventListener('end', (event) => {
	if (word !== 'quit') {
		recognition.start();
	} else {
		console.log('came to an end');
		console.dir(event);
	}
});
