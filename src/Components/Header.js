import React, { Component } from 'react';
import { Toolbar, Icon, ToolbarButton, BackButton } from 'react-onsenui';
import { withRouter } from 'react-router-dom';

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isCodeView : props.title !== 'Speech to Code'
		};
	}

	goBack = () => {
		this.props.history.goBack();
	};

	render() {
		return (
			<Toolbar>
				<div className="left">
					{this.state.isCodeView && <BackButton onClick={this.goBack}>Back</BackButton>}
				</div>
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

export default withRouter(Header);
