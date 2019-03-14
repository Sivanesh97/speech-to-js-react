import React, { Component } from 'react';
import { Toolbar, Icon, ToolbarButton, BackButton } from 'react-onsenui';

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isCodeView : props.title !== 'Speech to Code'
		};
	}

	render() {
		return (
			<Toolbar>
				<div className="left">{this.state.isCodeView && <BackButton>Back</BackButton>}</div>
				<div className="center">{this.props.title}</div>
				<div className="right">
					<ToolbarButton onClick={this.props.openSideNav}>
						<Icon icon="md-menu" />
					</ToolbarButton>
				</div>
			</Toolbar>
		);
	}
}

export default Header;