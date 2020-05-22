import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Page from './pageNavigator/pageNavigator';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {

	render(){
		return(
			<div>
			<BrowserRouter>
				<Page />
			</BrowserRouter>
			</div>
			)
	}

}

export default App;
