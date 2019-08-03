// action은 객체다
// action creator는 액션을 생성하는 함수
/*
const action = {
    type: 'updateUser',
    payload: {
        user: 'Tom'
    }
}
*/
import {ADD_PLAYER, CHANGE_SCORE, REMOVE_PLAYER} from "./actionTypes"; //named import

export const addPlayer = (name) => ({
    type: ADD_PLAYER,
    name
})

export const changeScore = (id, delta) => ({
    type: CHANGE_SCORE,
    id,
    delta
})

export const removePlayer = (id) => ({
    type: REMOVE_PLAYER,
    id
})


