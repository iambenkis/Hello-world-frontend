import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Initial State
const initialState = {
  payload: [],
};

// API
const GREETING_API = 'http://127.0.0.1:3000/api/v1/greetings/show';

export const getGreeting = createAsyncThunk('get', async () => {
  const response = await (await fetch(GREETING_API)).json();
  return response;
});

// Reducer
const greetSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {
  },
  extraReducers: {
    [getGreeting.fulfilled]: (state, action) => {
      const { payload } = action;
      return {
        payload,
      };
    },
  },
});

export default greetSlice.reducer;
