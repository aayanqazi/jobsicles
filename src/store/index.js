import { createStore, combineReducers, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import AuthReducer from './reducers/auth';
import AuthEpic from "./epic/auth";
import JobReducer from "./reducers/jobs";
import JobEpic from "./epic/jobs";
// import jobDetailsEpic from "./epic/jobDetails";

//combine epic
const rootEpic = combineEpics(
    AuthEpic.signupEpic,
    AuthEpic.loginEpic,
    JobEpic.allJobsEpic,
    JobEpic.JobDetailsEpic
  );

//combine reducers
export const rootReducer = combineReducers({
    AuthReducer,
    JobReducer
});

//create epic middleware
const epicMiddleware = createEpicMiddleware(rootEpic);

//connect middleware with store
const createStoreWithMiddleware =applyMiddleware(epicMiddleware)(createStore);

//create store with middleware
const Store = createStoreWithMiddleware(
    rootReducer,
);

export default Store;