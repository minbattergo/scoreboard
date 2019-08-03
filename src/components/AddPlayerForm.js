import React from 'react';
import {addPlayer} from "../redux/action";
import {connect} from "react-redux";

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

// dispatch : 자식이 => 부모에게 통신
// action을 dispatch하는 평션을 현재의 props로 매핑
const mapActionToProps  = (dispatch) => ({
	//왼쪽은 props, 오른쪽은 평션(액션을 디스패치하는 평선)
	addPlayer: (name) => dispatch(addPlayer(name))
})

// 커링 평션, Ho-Component
export default connect(null, mapActionToProps)(AddPlayerForm);

