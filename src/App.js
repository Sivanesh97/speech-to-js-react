import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './Components/Main';
import CodeView from './Components/CodeView';
// Webpack CSS import
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import Executer from './Components/Executer';
import { startRecognition, getRecognition } from './recognition';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data : [ 'Sivanesh', 'Helicopter', 'Eleven' ]
		};
	}

	componentDidMount() {
		startRecognition();

		let recognition = getRecognition();

		// recognition.addEventListener('result', (event) => {
		// 	let word = event.results[0][0].transcript;
		// 	// alert(`[App] ComponentDidMount ${word}`);
		// });
	}

	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Main} />
					<Route path="/code" component={CodeView} />
					<Route path="/run" component={Executer} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
