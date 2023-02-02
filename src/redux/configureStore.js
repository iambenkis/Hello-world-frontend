import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import greetReduce from './greetSlice';

const rootStore = combineReducers({
  greeting: greetReduce,
});

const store = configureStore({
  reducer: rootStore,
});

export default store;
