import { configureStore } from '@reduxjs/toolkit';
import todos from "../modules/todos.js";

const store = configureStore({
  // key : value 형태로 객체
  reducer: {
    todos: todos,
  }
});



export default store;