import { combineReducers } from 'redux';
import SplitReducer from './SplitReducer';

export default combineReducers({
  albums: SplitReducer
});
