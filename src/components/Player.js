import React from 'react';
import {Counter} from "./Counter";

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
export class Player extends React.Component {
	render() {
		const {name, score, removePlayer, id, changeScore} = this.props; //객체 해체 할당

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

	componentWillReceiveProps(nextProps, nextContext) {
		//console.log('componentWillReceiveProps [', nextProps);
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		//console.log('shouldComponentUpdate [', nextProps)
		return this.props.score !== nextProps.score ? true : false

	}
}