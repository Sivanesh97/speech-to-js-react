import React, { Component } from 'react';
import Header from './Header';
import { Splitter, SplitterContent, SplitterSide, Page } from 'react-onsenui';
import Run from './Run';
import SideNavContents from './SideNavContents';
import Prism from 'prismjs';
import './../prism.css';
import './../CodeView.css';

class CodeView extends Component {
	constructor(props) {
		super(props);

		this.state = {
			file_name : this.props.location.state.file_name,
			code      : [
				`console.log('is it')`,
				`let name = 'sivanesh'`,
				`function colorChanger() {\n   console.log(a)\n}`
			],
			showRight : false,
			openRight : false,
			style     : {
				backgroundColor : '#272822',
				// margin          : '20px',
				width           : '100%',
				height          : '100vh'
			}
		};
	}

	componentDidMount() {
		Prism.highlightAll(false, this.state.data);
		// let highLightCode = Prism.highlightAll(false, () => {
		// 	return this.state.code;
		// });
		Prism.highlightAll();
		// let highLightCode = Prism.highlight(this.state.code, Prism.languages.javascript, 'javascript');
		// document.querySelector('.language-js').innerHTML = highLightCode;
	}

	handleRightClose() {
		this.setState({ showRight: false, openRight: false });
	}

	handleRightOpen() {
		this.setState({ openRight: true });
	}

	openSideNav = () => {
		this.setState({ openRight: true });
	};

	render() {
		return (
			<div>
				<div>
					<Splitter>
						<SplitterContent>
							<Page
								renderFixed={() => <Run />}
								renderToolbar={() => (
									<Header openSideNav={this.openSideNav} title={this.state.file_name} />
								)}
								contentStyle={this.state.style}
							>
								{/* <h1>Content</h1> */}
								<pre style={this.state.style}>
									<code className="language-js">{this.state.code.map((item) => `${item}\n`)}</code>
								</pre>
							</Page>
						</SplitterContent>
						<SplitterSide
							side="right"
							width={300}
							collapse={!this.state.showRight}
							isOpen={this.state.openRight}
							onClose={this.handleRightClose.bind(this)}
							onOpen={this.handleRightOpen.bind(this)}
							swipeable={false}
						>
							<SideNavContents />
						</SplitterSide>
					</Splitter>
				</div>
			</div>
		);
	}
}

export default CodeView;
