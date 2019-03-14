import React, { Component } from 'react';
import { Page, List, ListItem } from 'react-onsenui';

class SideNavContents extends Component {
	render() {
		return (
			<List id="side-nav">
				<Page
					renderFixed={() => (
						<List
							style={{ position: 'absolute', bottom: '0px', width: '100%' }}
							renderHeader={() => <h4 id="side-nav-heading">Developers</h4>}
						>
							{' '}
							<a href="https://in.linkedin.com/in/sivanesh-shanmugam" target="_blank">
								<ListItem ripple>
									<div className="file-list">
										<span>Sivanesh</span>
									</div>
								</ListItem>
							</a>
							<a href="https://in.linkedin.com/in/sivanesh-shanmugam" target="_blank">
								<ListItem ripple>
									<div className="file-list">
										<span>Santhosh Kumar</span>
									</div>
								</ListItem>
							</a>
						</List>
					)}
				>
					<List renderHeader={() => <h4 id="side-nav-heading">Settings</h4>}>
						<a href="https://github.com/Sivanesh97/speech-to-js-react/blob/master/README.md">
							<ListItem ripple>
								<div className="file-list">
									<span>Documentation</span>
								</div>
							</ListItem>
						</a>

						<a href="https://github.com/Sivanesh97/speech-to-js-react" target="_blank">
							<ListItem ripple>
								<div className="file-list">
									<span>Source Code</span>
								</div>
							</ListItem>
						</a>
					</List>
				</Page>
			</List>
		);
	}
}

export default SideNavContents;
