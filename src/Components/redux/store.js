  import { configureStore } from '@reduxjs/toolkit'
  import selectUserReducer from './reducers/selectUserReducer';

  const store = configureStore({
    reducer: {
      selectedUserReducer : selectUserReducer,
    }
  });

  export default store;