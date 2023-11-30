import {createSlice} from '@reduxjs/toolkit';
const ThemeSlice = createSlice({
  name: 'ThemeSlice',
  initialState: {isLight: true},
  reducers: {
    toggleTheme: (state: TTheme) => {
      state.isLight = !state.isLight;
    },
  },
});
export const {toggleTheme} = ThemeSlice.actions;
export default ThemeSlice.reducer;
