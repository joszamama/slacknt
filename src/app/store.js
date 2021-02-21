import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../includes/features/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
