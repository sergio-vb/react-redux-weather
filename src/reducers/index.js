import { combineReducers } from 'redux';

import ForecastsReducer from './ForecastsReducer.js';

const rootReducer = combineReducers({
  forecasts: ForecastsReducer
});

export default rootReducer;
