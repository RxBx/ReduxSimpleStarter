import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'; //brings in package
import SearchBar from './components/search_bar'; //brings this code thru rel file path
import VideoList from './components/video_list';

//from console.developers.google.com after searching for YouTube Data API v3
const API_KEY = 'AIzaSyBroEwil-Wsm4pobLlpGUIcqWVGpYCJqJU';

// Create a new component. This component should produce some html

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({ videos }); //ES6 allows compacting this syntax from  ({videos: videos})
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div> //JSX syntax- subset of JS, "looks like" HTML, but JSX
		);
	} //And App is a 'class' not an instance; must create instance for use in DOM
}

//Old code const App = () => { //'fat arrow' to declare function instead of 'function() {'
	//return (
		//<div>
			//<SearchBar />

		//</div> //JSX syntax- subset of JS, "looks like" HTML, but JSX
	//);
//} //And App is a 'class' not an instance; must create instance for use in DOM

// Take this component HTML and put it on the page (in DOM)

ReactDOM.render(<App />, document.querySelector('.container')); //App is in JSX
//<App /> creates the instance; 2nd arg is destination