import {PayloadAction, createSlice} from '@reduxjs/toolkit';

const TodoSlice = createSlice({
  name: 'TodoSlice',
  initialState: [] as TToDo[],
  reducers: {
    addTodo: (state: TToDo[], action: PayloadAction<TToDo>) => {
      return [action.payload, ...state];
    },
    uploadTodo: (state: TToDo[], action: PayloadAction<TToDo[]>) => {
      return [...action.payload];
    },
    toggleTodo: (state: TToDo[], action: PayloadAction<number>) => {
      return state.map((s, i) => {
        if (i === action.payload) return {...s, isComplete: !s.isComplete};
        else return {...s};
      });
    },
  },
});
export const {addTodo, uploadTodo, toggleTodo} = TodoSlice.actions;
export default TodoSlice.reducer;
