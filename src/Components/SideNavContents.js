import React, { Component } from 'react';
import { Page, List, ListItem } from 'react-onsenui';

class SideNavContents extends Component {
	render() {
		return (
			<List>
				<Page
					renderFixed={() => (
						<List
							style={{ position: 'absolute', bottom: '0px', width: '100%' }}
							renderHeader={() => <h4 id="side-nav-heading">Developers</h4>}
						>
							<ListItem ripple>
								<div className="file-list">
									<span>Sivanesh</span>
								</div>
							</ListItem>
							<ListItem ripple>
								<div className="file-list">
									<span>Santhosh Kumar</span>
								</div>
							</ListItem>
						</List>
					)}
				>
					<List renderHeader={() => <h4 id="side-nav-heading">Settings</h4>}>
						<ListItem ripple>
							<div className="file-list">
								<span>Documentation</span>
							</div>
						</ListItem>
						<ListItem ripple>
							<div className="file-list">
								<span>Source Code</span>
							</div>
						</ListItem>
					</List>
				</Page>
			</List>
		);
	}
}

export default SideNavContents;
