import React, { Component } from 'react';
import Header from './Header';
import { Splitter, SplitterContent, SplitterSide, Page, BottomToolbar } from 'react-onsenui';
import Run from './Run';
import SideNavContents from './SideNavContents';
import './../CodeView.css';
import { getRecognition, stopRecognition } from '../recognition';
import { processing, printCode } from '../js/js';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/arduino-light.css';

class CodeView extends Component {
	constructor(props) {
		super(props);

		this.state = {
			file_name       : this.props.location.state.file_name,
			code            : '',
			interim_results : '',
			showRight       : false,
			openRight       : false,
			style           : {
				width  : '100%',
				height : '80vh'
			},
			style_id        : -1,
			style_arr       : [
				'a11y-dark.min.css',
				'a11y-light.min.css',
				'agate.min.css',
				'an-old-hope.min.css',
				'androidstudio.min.css',
				'arduino-light.min.css',
				'arta.min.css',
				'ascetic.min.css',
				'atelier-cave-dark.min.css',
				'atelier-cave-light.min.css',
				'atelier-dune-dark.min.css',
				'atelier-dune-light.min.css',
				'atelier-estuary-dark.min.css',
				'atelier-estuary-light.min.css',
				'atelier-forest-dark.min.css',
				'atelier-forest-light.min.css',
				'atelier-heath-dark.min.css',
				'atelier-heath-light.min.css',
				'atelier-lakeside-dark.min.css',
				'atelier-lakeside-light.min.css',
				'atelier-plateau-dark.min.css',
				'atelier-plateau-light.min.css',
				'atelier-savanna-dark.min.css',
				'atelier-savanna-light.min.css',
				'atelier-seaside-dark.min.css',
				'atelier-seaside-light.min.css',
				'atelier-sulphurpool-dark.min.css',
				'atelier-sulphurpool-light.min.css',
				'atom-one-dark-reasonable.min.css',
				'atom-one-dark.min.css',
				'atom-one-light.min.css',
				'brown-paper.min.css',
				'codepen-embed.min.css',
				'color-brewer.min.css',
				'darcula.min.css',
				'dark.min.css',
				'default.min.css',
				'docco.min.css',
				'dracula.min.css',
				'far.min.css',
				'foundation.min.css',
				'github-gist.min.css',
				'github.min.css',
				'gml.min.css',
				'googlecode.min.css',
				'grayscale.min.css',
				'gruvbox-dark.min.css',
				'gruvbox-light.min.css',
				'hopscotch.min.css',
				'hybrid.min.css',
				'idea.min.css',
				'ir-black.min.css',
				'isbl-editor-dark.min.css',
				'isbl-editor-light.min.css',
				'kimbie.dark.min.css',
				'kimbie.light.min.css',
				'lightfair.min.css',
				'magula.min.css',
				'mono-blue.min.css',
				'monokai-sublime.min.css',
				'monokai.min.css',
				'nord.min.css',
				'obsidian.min.css',
				'ocean.min.css',
				'paraiso-dark.min.css',
				'paraiso-light.min.css',
				'pojoaque.min.css',
				'purebasic.min.css',
				'qtcreator_dark.min.css',
				'qtcreator_light.min.css',
				'railscasts.min.css',
				'rainbow.min.css',
				'routeros.min.css',
				'school-book.min.css',
				'shades-of-purple.min.css',
				'solarized-dark.min.css',
				'solarized-light.min.css',
				'sunburst.min.css',
				'tomorrow-night-blue.min.css',
				'tomorrow-night-bright.min.css',
				'tomorrow-night-eighties.min.css',
				'tomorrow-night.min.css',
				'tomorrow.min.css',
				'vs.min.css',
				'vs2015.min.css',
				'xcode.min.css',
				'xt256.min.css',
				'zenburn.min.css'
			]
		};
	}

	startSpeech() {
		let recognition = getRecognition();
		recognition.addEventListener('result', this.codeUpdater);
	}

	codeUpdater = async (event) => {
		let word = '';
		let data = [];
		word = event.results[0][0].transcript;
		console.log(`Input `, word);

		if (word.startsWith('change theme')) {
			this.changeTheme();
		} else if (!word.startsWith(`quit`)) {
			let statements = word.split('over');
			statements.forEach(async (code) => {
				await processing(code.trim());
			});
			// await processing(word);
			data = printCode();
			await this.setState({ code: data });
			console.log(data);
			// this.setState({ code: [] });
			console.log(`[CodeView] Checking result Code`, data);
			this.setState({ code: data });
			document.querySelectorAll('pre code').forEach((block) => {
				console.log('came here', block);
				hljs.highlightBlock(block);
			});
		}
	};

	componentDidMount() {
		console.log(hljs);
		this.startSpeech();
		console.log(this.state.data, this.state.code);
		document.querySelectorAll('pre code').forEach((block) => {
			console.log('came here', block);
			hljs.highlightBlock(block);
		});
		this.changeTheme();
	}

	componentWillUnmount() {
		getRecognition().removeEventListener('result', this.codeUpdater);
	}

	changeTheme = () => {
		let i = 0;
		console.log(`Changing ${this.state.style_arr[this.state.style_id]}`, i++);
		this.setState((prev_state) => ({
			style_id : (prev_state.style_id + 1) % prev_state.style_arr.length
		}));
	};

	getFileName = () => {
		return this.state.file_name;
	};

	handleRightClose() {
		this.setState({ showRight: false, openRight: false });
	}

	handleRightOpen() {
		this.setState({ openRight: true });
	}

	openSideNav = () => {
		this.setState({ openRight: true });
	};

	printHandler = () => {
		let { code } = this.state;
		let parsed = code.split('\n');
		parsed = parsed.map((line) => {
			if (line.indexOf('document.write') !== -1) {
				return line.replace('write(', "write('<br>' + ");
			} else return line;
		});
		return parsed.join('\n');
	};

	handleRun = () => {
		this.props.history.push({ pathname: '/run', state: this.printHandler() });
	};

	render() {
		let { style_arr, style_id } = this.state;
		return (
			<div>
				<div>
					<Splitter>
						<SplitterContent>
							<Page
								renderFixed={() => <Run handleRun={this.handleRun} />}
								renderToolbar={() => (
									<Header
										openSideNav={this.openSideNav}
										title={this.state.file_name}
										getFileName={this.getFileName}
									/>
								)}
							>
								{/* <h1>Content</h1> */}
								<link
									rel="stylesheet"
									href={`//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/${style_arr[
										style_id
									]}`}
								/>
								<div>
									<pre>
										<code style={this.state.style} className="language-js">
											{this.state.code}
										</code>
									</pre>
								</div>
								<BottomToolbar modifier="material" id="notifier">
									{' '}
									Content{' '}
								</BottomToolbar>
							</Page>
						</SplitterContent>
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
					</Splitter>
				</div>
			</div>
		);
	}
}

export default CodeView;
