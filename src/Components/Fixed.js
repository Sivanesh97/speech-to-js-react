import React, { Component } from 'react';
import { SpeedDial, Fab, SpeedDialItem, Icon } from 'react-onsenui';

class Fixed extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<Fab position="right bottom">
				<Icon icon="fa-plus" size={26} fixedWidth={false} />
			</Fab>
		);
	}
}

export default Fixed;
