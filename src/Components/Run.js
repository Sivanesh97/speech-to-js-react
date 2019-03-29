import React, { Component } from 'react';
import { Fab, Icon } from 'react-onsenui';

class Fixed extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<Fab position="right bottom" onClick={this.props.handleRun}>
				<Icon icon="fa-play" size={26} fixedWidth={false} style={{ color: '#20c997' }} />
			</Fab>
		);
	}
}

export default Fixed;
