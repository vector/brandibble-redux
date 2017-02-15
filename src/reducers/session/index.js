import { combineReducers } from 'redux';
import addresses from './addresses';
import menus from './menus';
import order from './order';
import payments from './payments';

export default combineReducers({
  addresses,
  menus,
  order,
  payments,
});
