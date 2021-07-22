import { createStore,applyMiddleware} from "redux";
import reducers from "../Reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(reducers,composeWithDevTools(applyMiddleware(logger,thunk)) )
