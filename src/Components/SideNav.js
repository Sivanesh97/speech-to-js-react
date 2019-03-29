import React, { Component } from 'react';

class SideNav extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showRight : false,
			openRight : false
		};
	}

	render() {
		return (
			<div>
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
			</div>
		);
	}
}

export default SideNav;
