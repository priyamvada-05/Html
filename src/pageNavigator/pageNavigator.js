import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Question from '../Question/question';
import question1 from '../Question/question1/question1';
import question2 from '../Question/question2/question2';
import question3 from '../Question/question3/question3';


class Page extends React.Component{


	render(){
		return(
			<div>
					<Switch >
						<Route 
							exact={true} 
							path='/' 
							component={Question}>
						</Route>

						<Route 
							exact={true} 
							path='/question1' 
							component={question1}>
						</Route>

												<Route 
							exact={true} 
							path='/question2' 
							component={question2}>
						</Route>

												<Route 
							exact={true} 
							path='/question3' 
							component={question3}>
						</Route>
					</Switch>

			</div>
			)

	}

}


export default Page;