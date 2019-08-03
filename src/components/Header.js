import React from 'react';
import Statistics from "./Statistics";
import {StopWatch} from "./StopWatch";
import PropTypes from 'prop-types';

// 앞글자는 대문자, 반드시 react element를 리턴
export const Header = ({title, players}) => {
	// 객체 해체 할당
	// const {title, players} = props;
	return (
		<header className="header">
			<Statistics />
			<h1 className="h1">{title}</h1>
			<StopWatch />
		</header>
	)
};

Header.propTypes = {
	title: PropTypes.string,
	//players: PropTypes.arrayOf(PropTypes.object) //배열 요소가 객체일경우
	players: PropTypes.arrayOf(PropTypes.shape({
		score: PropTypes.number,
	    id: PropTypes.number,
		name: PropTypes.string
	}))
};

//title 값이 부모로 부터 안넘어 올때 default값 설정
Header.defaultProps = {
	title: 'Scoreboard'
};