import React, { Component } from 'react';
import Header from './Header';
import { Page, Splitter, SplitterSide, SplitterContent } from 'react-onsenui';
import Fixed from './Fixed';
import SideNavContents from './SideNavContents';
import Files from './Files';

class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showRight : false,
			openRight : false,
			data      : [ 'Speech.js', 'index.html', 'index.css', 'script.js' ],
			dummyData : [ `1` ]
		};
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
		// let { Page, BackButton, Toolbar, Icon, ToolbarButton } = Ons;
		return (
			<div>
				<Splitter>
					<SplitterContent>
						<Page
							renderFixed={() => <Fixed />}
							renderToolbar={() => <Header openSideNav={this.openSideNav} title="Speech to Code" />}
							contentStyle={{}}
						>
							<Files />
						</Page>
					</SplitterContent>
					<SplitterSide
						side="right"
						width={300}
						collapse={!this.state.showRight}
						isOpen={this.state.openRight}
						onClose={this.handleRightClose.bind(this)}
						onOpen={this.handleRightOpen.bind(this)}
						swipeable={true}
					>
						<SideNavContents />
					</SplitterSide>
				</Splitter>
			</div>
		);
	}
}

export default Main;
