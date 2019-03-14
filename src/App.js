import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './Components/Main';
import CodeView from './Components/CodeView';
// Webpack CSS import
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data : [ 'Sivanesh', 'Helicopter', 'Eleven' ]
		};
	}
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Main} />
					<Route path="/code" component={CodeView} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
