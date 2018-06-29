import { combineReducers } from 'redux';
import charactersReducer from './charactersReducer';
import paginatorReducer from './paginatorReducer';

export default combineReducers({
  charactersReducer,
  paginatorReducer,
});
