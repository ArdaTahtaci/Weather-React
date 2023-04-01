import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./reducer.js";

const store = createStore(reducer, applyMiddleware(thunk, logger))

export default store