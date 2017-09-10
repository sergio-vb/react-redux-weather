import { FETCH_FORECASTS } from '../actions'

export default function(state = [], action){
    switch (action.type){
        case FETCH_FORECASTS:
            //ES5: return state.concat(action.payload.data);
            return [action.payload.data, ...state];
    }
    return state;
}