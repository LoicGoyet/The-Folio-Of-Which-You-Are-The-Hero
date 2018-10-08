import { combineReducers } from 'redux';

import rooms from './rooms';
import items from './items';
import messages from './messages';

export default combineReducers({ rooms, items, messages });
