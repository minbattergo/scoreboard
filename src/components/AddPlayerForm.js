import React from 'react';

export class AddPlayerForm extends React.Component {
/*	state = {
		value: ''
	}*/

/*
	handleValueChange = (e) => {
		console.log(e);
		this.setState({value: e.target.value})
	}
*/
    textInput = React.createRef();

	handleSubmit = (e) => {
		//기본 이벤트 refresh 막는다.
		e.preventDefault();
		//
		const playerInput = document.getElementById("player");
		console.log(playerInput.validity.valid);
		console.log("from valid", document.getElementById("form").checkValidity());
		if( !playerInput.validity.valid ) {
			//에러메시지 보여주기

			return;
		}

		//this.props.addPlayer(this.state.value);
		//this.textInput.current가 Dom 노드에 해당
		//this.props.addPlayer(this.textInput.current.value);
		this.props.addPlayer(playerInput.value);
	}
    //	value={this.state.value} onChange={this.handleValueChange}
	render() {
		return (
			<form className="form" onSubmit={this.handleSubmit} noValidate id="form">
				<input className="input" type="text" placeholder="enter a player's name" required id="player"
				 ref={this.textInput}></input>
				<input className="input" type="submit" value="Add Player" ></input>
			</form>
		);
	}
}
