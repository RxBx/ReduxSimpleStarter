import React, { Component } from 'react'; //need to import so JSX commands can access React code
// { Component} above is trick to make standalone Component const from React.Component

//create the item

//code immediately below was supplanted by class SearchBar below it
///const SearchBar = () => {
///	return <input />; //JSX
///}

class SearchBar extends Component {//ES6 dependent class decl
// then accesses all functionality React.Component class
	//estab the 'state' through below
	//constructor is ES6 method attached to all Class objects
	constructor(props) {
		//below is nec to invoke thru 'super' a capability on parent Component class
		super(props);
		//create the 'state' as object w desired keys/props, and start value
		this.state = { term: ''}; // 'term' is to hold 'search terms' from input
	}

	render() { //new syntax for adding method to a class in ES6
		//this JSX render is now a method on class
		return (
			<div>
				<input onChange= {event => this.setState({ term: event.target.value })} />

			</div>
		);

		//Value of the input: {this.state.term} would show updated term in Dom is included above
		//JSX allows inserting JS in curly brackets above
		//prior version
		//return <input onChange={this.onInputChange} />; // DOM HTML event handler then triggers JS
		//alt condensed: return <input onChange= {event => console.log(event.target.value)} />;
	}

	//onInputChange(event) { // event handler (or handleInputChange) - a naming convention
		//and event object is the argument
		//console.log(event.target.value);

	//}
}



//make the SearchBar accessible to index.js
export default SearchBar;