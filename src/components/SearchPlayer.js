import React from 'react'
import {connect} from "react-redux";
import {searchName, setIsSorted} from "../redux/action";

export class SearchPlayer extends React.Component {
    handelChange = (e) => {
        this.props.setIsSorted(e.target.checked);
    }

    handleSearch = (e) => {
        this.props.searchName(e.target.value);
    }

    render() {
        return (
            <div className="search-box">
                <label>
                    <input type="text" placeholder="search name" className="input" onChange={this.handleSearch} />
                    <input type="checkbox" checked={this.props.isSorted} onChange={this.handelChange} />
                    show good player and bad player
                </label>
            </div>
        );
    }
}

// Store 의 state를 props로 subscribe 한다: 부모 -> 자식으로 통신
const mapStateToProps = (state) => ({
    //왼쪽은 props, 오른쪽은 state
    isSorted: state.playerReducer.isSorted
})

const mapActionToProps  = (dispatch) => ({
    //왼쪽은 props, 오른쪽은 평션(액션을 디스패치하는)
    setIsSorted: (isSorted) => dispatch(setIsSorted(isSorted)),
    searchName: (keyword) => dispatch(searchName(keyword))
})

// 커링 평션, Ho-Component
export default connect(mapStateToProps, mapActionToProps)(SearchPlayer);
