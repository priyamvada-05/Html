import React from 'react';

class question3 extends React.Component {
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
DropA=(event)=>{
 event.preventDefault();
}

	dragStart=(event)=>{

		const {value}= event.target
		console.log(value)
		event.dataTransfer.setData("Text", value);

	}

	handleDrag = (event)=>{
		var data = event.dataTransfer.getData("Text");
		console.log(data)
		this.setState({
			selected: data
		})

		console.log('ans')
		console.log(this.state.selected)
		     }

		     handleSubmit=(event)=>{
		     	if(this.state.selected === 'Neo'){
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
		     }
	

render(){
  return (
    <div className="App">
      <h1> Question 3</h1>

      <h3>Q3) _______ is a character in the film “The Matrix”.</h3>

  	<form onSubmit={this.handleSubmit}>
  		<p onDragStart={(e)=> this.dragStart(e)} name="R2D2" value='R2D2' draggable="true" >R2D2</p>

    

  		<p onDragStart={this.dragStart} value='Neo' draggable="true" >Neo</p>


  		<p onDragStart={this.dragStart} value='Ripley' draggable="true" >Ripley</p>


	<div style={{float: 'left',
  width:' 100px',
  height: '35px',
  margin: '15px',
  padding: '10px',
  border: '1px solid #aaaaaa'}} onDrop={this.handleDrag} onDragOver={this.DropA} >{this.state.selected}</div>
  		<button type='submit' > Submit</button>
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

    </div>
  )
}
}

export default question3;