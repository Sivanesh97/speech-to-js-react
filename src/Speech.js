class Speech {
	static getSpeech() {
		var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

		let recognition = new SpeechRecognition();
		recognition.start();
		recognition.onend = () => {
			recognition.start();
		};
		return recognition;
	}
}

export default Speech;
