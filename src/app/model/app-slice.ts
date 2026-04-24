import {createSlice} from '@reduxjs/toolkit'

type ThemeMode = 'light' | 'dark'

const getInitialTheme = (): ThemeMode => {
  const saved = localStorage.getItem('theme')
  return saved === 'dark' ? 'dark' : 'light'
}


const initialState = {
  theme: getInitialTheme(),
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  selectors: {
    selectThemeMode: (state) => state.theme,
  },
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light'
    },
  },
})


export const {selectThemeMode} = appSlice.selectors
export const {toggleTheme} = appSlice.actions
export const appReducer = appSlice.reducer