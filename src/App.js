import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import AddPlayerForm from "./components/AddPlayerForm";
import {connect} from "react-redux";
import {PlayList} from "./components/PlayList";
import SearchPlayer from "./components/SearchPlayer";

class App extends React.Component {
  // Listing UP: 카운터 컴포넌트가 갖고 있는 로컬 state를 최상단 부모로 올리기
  // 로직을 구현하기 위해서 Lifting up이 필요

  render() {
      const allPlayers  = this.props.filteredPlayers;
      const goodPlayers = this.props.filteredPlayers.filter(item => item.score >= 0);
      const badPlayers = this.props.filteredPlayers.filter(item => item.score < 0);

    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" />
        <SearchPlayer/>
        {
/*          this.props.players.map((player) =>
            <CustomPlayer name={player.name} score={player.score}
                    id={player.id} key={player.id}
                    isHighScore={player.score === this.getHighScore()} />)
                   */
            !this.props.isSorted ? <PlayList playerState="All Player"  players={allPlayers} /> :
            [
                <PlayList playerState="Good Player" players={goodPlayers}/>,
                <PlayList playerState="Bad Player"  players={badPlayers}/>,
            ]
        }
        <AddPlayerForm />
      </div>
    )
  }

}

// Store 의 state를 props로 subscribe 한다: 부모 -> 자식으로 통신
const mapStateToProps = (state) => ({
  //왼쪽은 props, 오른쪽은 state
  players: state.playerReducer.players,
  filteredPlayers: state.playerReducer.filteredPlayers,
  isSorted: state.playerReducer.isSorted,
})

// 커링 평션, Ho-Component
export default connect(mapStateToProps, null)(App);
