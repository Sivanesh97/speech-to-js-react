import React, { Component } from 'react';
import { Splitter, SplitterContent, SplitterSide, Page } from 'react-onsenui';
import Header from './Header';
import SideNavContents from './SideNavContents';
import '../Executer.css';
class Executer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			code      : this.props.location.state,
			showRight : false,
			openRight : false
		};
	}

	componentDidMount() {
		// this.setState({ code: this.props.location.state });
		console.log('[Executer] ComponentDidMount: props', this.props);
		this.executeJs();
	}

	executeJs = () => {
		let code_document = document.querySelector('#code-runner').contentDocument;
		let code_window = document.querySelector('#code-runner').contentWindow;
		const script = code_document.createElement('script');

		code_document.body.style.backgroundColor = 'crimson';
		console.log(this.state.code);
		script.append(this.state.code);
		code_document.body.appendChild(script);
		code_document.close();
	};

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
				<Splitter>
					<SplitterContent>
						<Page
							renderToolbar={() => <Header openSideNav={this.openSideNav} title={this.state.file_name} />}
							contentStyle={this.state.style}
						>
							<iframe id="code-runner" src="/code.html" frameBorder="0" />
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
		);
	}
}

export default Executer;
