import * as Registry from '../Registry'
import {
  Actions
} from 'react-native-router-flux';

const initialState = {
  route: Registry.ROUTE_LAUNCH,
  toggled: false
}

function route(route){
  if(Actions[route]== undefined){
    return;
  }
  Actions[route]();
}

export default (state = initialState, action) =>{
  switch (action.type) {
    case Registry.ACTION_SET_ROUTE:
      if (state.route === action.payload){
        return state;
      }
      route(action.payload);
      return {
        ...state,
        route: action.payload
      };

    case Registry.ACTION_SET_TOGGLE:
      return {
        ...state,
        toggled: action.payload
      }

    case Registry.ACTION_TOGGLE:
      return {
        ...state,
        toggled: !state.toggled
      };

    default:
      return state;
  }
}
