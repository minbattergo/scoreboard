
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// redux 디버깅 활성화 : 1) 크롬 확장팩설치(redux devtools), 2) 두번째 파라메터에 아래와 같이 입력
import {createStore} from "redux";
import {allReducers} from "./reducers";

export const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

