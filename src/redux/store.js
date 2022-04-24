/*Work on getting the state to open/close drawer in redux*/
import {createStore, applyMiddleware} from "redux"
import rootReducers from "./reducers/index"
import thunk from "redux-thunk"
export const store = createStore(rootReducers, {}, applyMiddleware(thunk));

