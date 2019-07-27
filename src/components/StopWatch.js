import React from 'react'

export class StopWatch extends React.Component {
    state = {
        timer: 0,
        isRunning: false
    }

    tickref;

    render() {
        return (
            <div className="stopwatch">
                <h2>StopWatch</h2>
                <span className="stopwatch-time">{this.state.timer}</span>
                <button onClick={this.handleStopWatch}>{this.state.isRunning ? 'stop' : 'start'}</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }

    tick = () => {
        if( this.state.isRunning ) {
            this.setState(prevState => ({ //비동기, 오버라이팅, prevState받음
                timer: prevState.timer + 1
            })); //json객체를 반환하기 위해 () 쌓는다.
        }
    }

    handleStopWatch  = () => {
        this.setState(prevState => ({
            isRunning: !prevState.isRunning
        }));
    }

    handleReset = () => {
        this.setState({timer:0});
    }

    //Dom이 렌더링 된 직후에 호출되는 라이프 사이클 메서드
    //네트워크 호출, 3rd 라이브러리(ex: JQuery) 로딩
    componentDidMount() {
        this.tickref =  setInterval(this.tick, 1000);
    }

    // Dom이 파괴 직전에 호출되는 라이프 사이클 메서드
    // 리소스 해제 CallBack해제
    componentWillUnmount() {
        clearInterval(this.tickref);
    }
}