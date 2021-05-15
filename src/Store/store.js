import { createStore } from "redux";
import userReducer from "../Reducers/usersreducer";

export const store = createStore(userReducer);