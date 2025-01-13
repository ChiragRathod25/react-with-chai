import { createSlice, nanoid } from "@reduxjs/toolkit";
// nanoid -> generates unique id

const initialState = {
  todos: [{ id: 1, text: "Hello world " }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    //state -> it gives as access to the data of current state
    //action -> it is to provide data/parameter to the function while calling,
    //e.g. we get todo details from it's unique id
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id != action.payload.id
          ? todo
          : { ...todo, text: action.payload.text }
      );
    },
  },
});
export const {addTodo,updateTodo,removeTodo}=todoSlice.actions

export default todoSlice.reducer