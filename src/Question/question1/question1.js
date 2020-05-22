import React from 'react';

class question1 extends React.Component {
	constructor(props){
		super(props)
		this.state={
			selected: '',
			correct: false,
			onClickRadio:false,
			onClickSubmit:false,
			triggerAlter: false
		}
	}

	handleOnCLick = (event)=>{
		const {value}= event.target;
		this.setState({
			selected: value,
			onClickRadio: true
		})

	}

	handleSubmit= (event)=>{
		console.log('submit')
		event.preventDefault();
		
		if(this.state.selected === 'New York'){
			this.setState({
				correct: true,
				onClickSubmit: true,
				triggerAlter: true
			})
		}
		else{
			this.setState({
				correct: false,
				onClickSubmit: true,
				triggerAlter: true
			})
		}

		
		
		console.log(this.state.correct)
	}

	handleNext=()=>{
		this.props.history.push('/question2')
	}

render(){
  return (
    <div className="App">
      <h1> Question 1</h1>

      <h3>Q1) Where would you find the Empire State building?</h3>

  	<form onSubmit={this.handleSubmit}>
      <input type='radio' name="radio" value="New York" onChange={this.handleOnCLick} /> 
      <label for="male">New York</label><br></br>
      
       <input type='radio' name="radio" value="Los Angeles" onChange={this.handleOnCLick}/> 
      <label for="male">Los Angeles</label><br></br>
      
      <input type='radio' name="radio" value="San Francisco" onChange={this.handleOnCLick}/> 
      <label for="male">San Francisco</label><br></br>
      
       <input type='radio' name="radio" value="New Orleans" onChange={this.handleOnCLick}/> 
       <label for="male">New Orleans</label><br></br>

      	<button type='submit'>Submit</button>

     </form>
     {this.state.triggerAlter?
		(     this.state.correct?
			(<div class="alert alert-success alert" role="alert">
				  This is a Correct!
				</div>)
			:<div class="alert alert-danger alert" role="alert">
				     		  This is a Incorrect!
				     		</div>
		)
	:null}

	<br />
	<button onClick={this.handleNext}>Next Question</button>

    </div>
  )
}
}

export default question1;