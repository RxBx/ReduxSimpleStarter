import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This component should produce some html

const App = () => { //'fat arrow' to declare function instead of 'function() {'
	return <div>Hi!</div>; //JSX syntax- subset of JS, "looks like" HTML, but JSX
} //And App is a 'class' not an instance; must create instance for use in DOM

// Take this component HTML and put it on the page (in DOM)

ReactDOM.render(<App />, document.querySelector('.container')); //App is in JSX
//<App /> creates the instance; 2nd arg is destination