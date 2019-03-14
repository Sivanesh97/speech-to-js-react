import React, { Component } from 'react';
import { SpeedDial, Fab, SpeedDialItem, Icon } from 'react-onsenui';

class Fixed extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<SpeedDial disabled={false} direction="left" onClick={() => console.log('test1')} position="right bottom">
				<Fab>
					<Icon icon="fa-play" size={26} fixedWidth={false} style={{ color: '#20c997' }} />
				</Fab>
				<SpeedDialItem onClick={() => console.log('speed A')}> A </SpeedDialItem>
				<SpeedDialItem onClick={() => console.log('speed B')}> B </SpeedDialItem>
				<SpeedDialItem onClick={() => console.log('speed C')}> C </SpeedDialItem>
				<SpeedDialItem onClick={() => console.log('speed D')}> D </SpeedDialItem>
			</SpeedDial>
		);
	}
}

export default Fixed;
