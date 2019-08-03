import React from 'react';
import Counter from "./Counter";
import {connect} from "react-redux";
import {removePlayer} from "../redux/action";

/*
//function compoment
export const Player = ({name, score, removePlayer, id, changeScore}) => {
	console.log(name, 'rendered'); //객체해체 할당
	return (
		<div className="player">
			<span className="player-name">
				<button className="remove-player" onClick={() => removePlayer(id)}>x</button>
				{name}
			</span>
			<Counter id={id} score={score} changeScore={changeScore} />
		</div>
	);
}
*/

//class compoment
export class Player extends React.PureComponent {
	render() {
		const {name, score, id, removePlayer } = this.props; //객체 해체 할당

		console.log(name, 'rendered'); //객체해체 할당
		return (
			<div className="player">
			<span className="player-name">
				<button className="remove-player" onClick={() => removePlayer(id)}>x</button>
				{this.props.children}  {/* 보모로부터 받은 나머지 속성을 받는다 */}
				{name}
			</span>
				<Counter id={id} score={score} />
			</div>
		);
	}

/*
	componentWillReceiveProps(nextProps, nextContext) {
		//console.log('componentWillReceiveProps [', nextProps);
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		//console.log('shouldComponentUpdate [', nextProps)
		return this.props.score !== nextProps.score ? true : false

	}
*/

}

// dispatch : 자식이 => 부모에게 통신
// action을 dispatch하는 평션을 현재의 props로 매핑
const mapActionToProps  = (dispatch) => ({
	//왼쪽은 props, 오른쪽은 평션(액션을 디스패치하는)
	removePlayer: (id) => dispatch(removePlayer(id))
})

// 커링 평션, Ho-Component
export default connect(null, mapActionToProps)(Player);
