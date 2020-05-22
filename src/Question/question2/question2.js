import React from 'react';

class question2 extends React.Component {
		constructor(props){
		super(props)
		this.state={
			Processor: false,
			Memory: false,
			CD_ROM_Drive: false,
			Printer: false,
			Hard_Disk: false,
			selected: [],
			correct: false,
			onClickRadio:false,
			onClickSubmit:false,
			triggerAlter: false
		}
	}

	handleOnCLick1 = (event)=>{
		console.log(event.target)
		const {name, value}= event.target;
		console.log(value)
		     	this.setState((prevState)=> {
		     		if(prevState.Processor){
		     			//var index= prevState.selected.indexOf(value);
		     			return ({
     			     		Processor: !prevState.Processor,
     			     		selected: [...this.state.selected.filter((item)=> { return item !== 'Processor' })]
     			     	})
		     		}

		     		else{
		     			return ({
     			     		Processor: !prevState.Processor,
     			     		selected: [...this.state.selected, value]
     			     	})
		     		}
		     		
		     })
		     }


	handleOnCLick2 = (event)=>{
		console.log(event.target)
		const {name, value}= event.target;
		console.log(value)
		     	this.setState((prevState)=> {
		     		if(prevState.Memory){
		     			var index= prevState.selected.indexOf(value);
		     			return ({
     			     		Memory: !prevState.Memory,
     			     		selected: [...this.state.selected.filter((item)=> { return item !== 'Memory' })]
     			     	})
		     		}

		     		else{
		     			return ({
     			     		Memory: !prevState.Memory,
     			     		selected: [...this.state.selected, value]
     			     	})
		     		}
		     		
		     })

}

	handleOnCLick3 = (event)=>{
		console.log(event.target)
		const {name, value}= event.target;
		console.log(value)
		     	this.setState((prevState)=> {
		     		if(prevState.CD_ROM_Drive){
		     			var index= prevState.selected.indexOf(value);
		     			return ({
     			     		CD_ROM_Drive: !prevState.CD_ROM_Drive,
     			     		selected: [...this.state.selected.filter((item)=> { return item !== 'CD-ROM Drive' })]
     			     	})
		     		}

		     		else{
		     			return ({
     			     		CD_ROM_Drive: !prevState.CD_ROM_Drive,
     			     		selected: [...this.state.selected, value]
     			     	})
		     		}
		     		
		     })
		console.log(this.setState.selected)

}

	handleOnCLick4 = (event)=>{
		console.log(event.target)
		const {name, value}= event.target;
		console.log(value)
		     	this.setState((prevState)=> {
		     		if(prevState.Printer){
		     			var index= prevState.selected.indexOf(value);
		     			return ({
     			     		Printer: !prevState.Printer,
     			     		selected: [...this.state.selected.filter((item)=> { return item !== 'Printer' })]
     			     	})
		     		}

		     		else{
		     			return ({
     			     		Printer: !prevState.Printer,
     			     		selected: [...this.state.selected, value]
     			     	})
		     		}
		     		
		     })

}

	handleOnCLick5 = (event)=>{
		console.log(event.target)
		const {name, value}= event.target;
		console.log(value)
		     	this.setState((prevState)=> {
		     		if(prevState.Hard_Disk){
		     			var index= prevState.selected.indexOf(value);
		     			return ({
     			     		Hard_Disk: !prevState.Hard_Disk,
     			     		selected: [...this.state.selected.filter((item)=> { return item !== 'Hard Disk' })]
     			     	})
		     		}

		     		else{
		     			return ({
     			     		Hard_Disk: !prevState.Hard_Disk,
     			     		selected: [...this.state.selected, value]

     			     	})
		     		}
		     		
		     })

		  }


	

	handleSubmit= (event)=>{
		console.log('submit')
		event.preventDefault();
		
		if(this.state.selected.length == 4){
			this.state.selected.forEach((item)=>{
				console.log(item)
				var check= ['Processor', 'Memory', 'Hard Disk', 'CD-ROM Drive'].includes(item);
				if(check){
					this.setState({
				correct: true,
				triggerAlter: true
			})
				}

				else{
					this.setState({
				correct: false,
				triggerAlter: true
			})
				}
			})
		}
		
		else{
			this.setState({
				correct: false,
				triggerAlter: true
			})
		}
		

		
		
		console.log(this.state.selected)
	}

		handleNext=()=>{
		this.props.history.push('/question3')
	}

render(){
  return (
    <div className="App">
      <h1> Question 2</h1>

      <h3>Q2) Identify the components of a PC</h3>

  	<form onSubmit={this.handleSubmit}>
      <input type='radio' name="Processor" value="Processor" checked={this.state.Processor} onClick={this.handleOnCLick1} /> 
      <label for="male">Processor</label><br></br>
      
       <input type='radio' name="Memory" value="Memory" checked={this.state.Memory} onClick={this.handleOnCLick2}/> 
      <label for="male">Memory</label><br></br>
      
      <input type='radio' name="Hard_Disk" value="Hard Disk" checked={this.state.Hard_Disk} onClick={this.handleOnCLick5}/> 
      <label for="male">Hard Disk</label><br></br>
      
       <input type='radio' name="CD_ROM_Drive" value="CD-ROM Drive" checked={this.state.CD_ROM_Drive} onClick={this.handleOnCLick3}/> 
       <label for="male">CD-ROM Drive</label><br></br>

       <input type='radio' name="Printer" value="Printer" checked={this.state.Printer} onClick={this.handleOnCLick4}/> 
       <label for="male">Printer</label><br></br>

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

export default question2;