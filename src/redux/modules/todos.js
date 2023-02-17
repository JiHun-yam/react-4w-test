import { createSlice } from "@reduxjs/toolkit";



// 초기값
const initialState = [
  {
    id: 0,
    title: '아 집에가고싶다',
    body: '졸려',
    isDone: false
  },
  {
    id: 1,
    title: '프론트엔드 개발자 되기',
    body: '파이팅',
    isDone: true
  }
]

const todosSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    },
    deleteTodo: (state, action) => {
      // 리턴을 해줘야 먹는당 ! 
      return state.filter((list) => list.id !== action.payload
      );
    },
    toggleStatusTodo: (state, action) => {
      return state.map((list) => list.id === action.payload.id ? { ...list, isDone: !action.payload.isDone } : list)
    }
  }
})
export default todosSlice.reducer;

export const { addTodo, deleteTodo, toggleStatusTodo } = todosSlice.actions;


// // Action value
// const ADD_TODO = "ADD_TODO";
// const DELETE_TODO = "DELETE_TODO";
// const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";

// // Action Creator
// // Todo를 추가하는 action creator
// export const addTodo = (title, body) => {
//   return {
//     type: ADD_TODO,
//     title: title,
//     body,
//   };
// };

// // Todo를 지우는 action creator
// export const deleteTodo = (payload) => {
//   return {
//     type: DELETE_TODO,
//     payload,
//   };
// };

// // Todo를 isDone를 변경하는 action creator
// export const toggleStatusTodo = (payload) => {
//   return {
//     type: TOGGLE_STATUS_TODO,
//     payload,
//   };
// };




// const todos = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return [
//         ...state,
//         //  dispatch(addTodo(title, body)) 요거롤 가져온값들을 
//         // 객체형태로 만들고 기본값 넣어주고 데이터 바인딩  
//         // 기존값 얉은복사는 잊지않고 
//         {

//           id: Date.now(),
//           title: action.title,
//           body: action.body,
//           isDone: false,
//         }

//       ];
//     case DELETE_TODO:
//       // 필터를 사용해서 state 자료들과 받아온id값이 같지않은거만 남긴다 
//       // 즉 같은건 제거한단
//       return state.filter((list) => list.id !== action.payload);

//     case TOGGLE_STATUS_TODO:
//       // 맵을 사용해서 받아온id값에 맞는 state=list 객체를 찾고 얕은복사 하고 거기에 값을 : !action.payload.isDone 으로 
//       // 기존값에 반대가 되게 구현했다
//       return state.map((list) => list.id === action.payload.id ? { ...list, isDone: !action.payload.isDone } : list)
//     default:
//       return state;
//   }
// };

// export default todos;
