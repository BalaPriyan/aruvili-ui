import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
  theme: 'light' | 'dark' | 'system';
  sidebarOpen: boolean;
}

const initialState: UiState = {
  theme: 'system',
  sidebarOpen: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<'light' | 'dark' | 'system'>) => {
      state.theme = action.payload;
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
  },
});

export const { setTheme, toggleSidebar } = uiSlice.actions;

export const createAruviliStore = (preloadedState?: any) => {
  return configureStore({
    reducer: {
      ui: uiSlice.reducer,
    } as any,
    preloadedState,
  });
};

export type AruviliStore = ReturnType<typeof createAruviliStore>;
export type RootState = ReturnType<AruviliStore['getState']>;
export type AppDispatch = AruviliStore['dispatch'];
