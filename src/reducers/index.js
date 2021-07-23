import { combineReducers } from "redux";
import userReducer from "./userReducer";
import deckReducer from "./deckReducer";

const rootReducer = combineReducers({
  user: userReducer,
  deck: deckReducer,
});

export default rootReducer;
