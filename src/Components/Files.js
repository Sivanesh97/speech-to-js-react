import React, { Component } from 'react';
import { List, ListItem } from 'react-onsenui';
import { Link } from 'react-router-dom';

class Files extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data : [ 'Speech.js', 'index.html', 'index.css', 'script.js' ]
		};
	}

	render() {
		return (
			<div>
				<List
					dataSource={this.state.data}
					renderRow={(row) => (
						<Link
							key={row}
							to={{ pathname: '/code', state: { file_name: row } }}
							style={{ textDecoration: 'none', color: '#212121' }}
						>
							<ListItem key={row} ripple>
								<div className="file-list">
									<i className="fab fa-js-square" />
									<span>{row}</span>
								</div>
							</ListItem>
						</Link>
					)}
				/>
			</div>
		);
	}
}

export default Files;
