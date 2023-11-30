import {configureStore} from '@reduxjs/toolkit';
import ThemeSlice from '@state_management/slices/ThemeSlice';
import ToDoSlice from '@state_management/slices/ToDoSlice';
export type RootState = {
  ThemeSlice: TTheme;
  ToDoSlice: TToDo[];
};
const store = configureStore({
  reducer: {
    ThemeSlice: ThemeSlice,
    ToDoSlice: ToDoSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export {store};
