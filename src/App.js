import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import AddPlayerForm from "./components/AddPlayerForm";
import {connect} from "react-redux";
import {CustomPlayer} from "./components/CustomPlayer";

class App extends React.Component {
  // Listing UP: 카운터 컴포넌트가 갖고 있는 로컬 state를 최상단 부모로 올리기
  // 로직을 구현하기 위해서 Lifting up이 필요

  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" />

        {
          this.props.players.map((player) =>
            <CustomPlayer name={player.name} score={player.score}
                    id={player.id} key={player.id}
                    isHighScore={player.score === this.getHighScore()} />)
        }
        <AddPlayerForm />
      </div>
    )
  }

  getHighScore() {
      let highScore = 0;
      this.props.players.forEach(player => {
          if(player.score > highScore) highScore = player.score;
      })
      return highScore > 0 ? highScore : null;
  }
}

// Store 의 state를 props로 subscribe 한다: 부모 -> 자식으로 통신
const mapStateToProps = (state) => ({
  //왼쪽은 props, 오른쪽은 state
  players: state.playerReducer.players
})

// 커링 평션, Ho-Component
export default connect(mapStateToProps, null)(App);
