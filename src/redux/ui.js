import * as Const from '../constants';

export function loadingReducer(state = false, action) {
  switch (action.type) {
    case Const.loading:
      return true;
    case Const.increment:
    case Const.decrement:
      return false;
    default:
      return state;
  }
}
