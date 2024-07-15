import { productReducer } from "./ProductReducer";
import { combineReducers } from "redux";

export  const Reducer=combineReducers({ ProductData:productReducer})