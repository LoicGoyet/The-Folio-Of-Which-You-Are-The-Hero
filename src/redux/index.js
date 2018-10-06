import { combineReducers } from 'redux';

import rooms from './rooms';
import items from './items';

export default combineReducers({ rooms, items });
