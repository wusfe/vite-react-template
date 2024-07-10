import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

export interface MenuCollapsedProps {
    collapsedState: {
        home: boolean;
        map: boolean;
        comprehensiveTesting: boolean;
        testHistory: boolean;
    },
    menuState: boolean;
}

export const initialState: MenuCollapsedProps = {
    collapsedState: {
        home: false,
        map: false,
        comprehensiveTesting: false,
        testHistory: false
    },
    menuState: true,
}

export const settingCollapsed = createSlice({
    name: 'menuCollapsed',
    initialState,
    reducers: {
        setMenuCollapsed(state, action: PayloadAction<{home: boolean, map: boolean, comprehensiveTesting: boolean, testHistory: boolean}>) {
            state.collapsedState = action.payload;
        },
        setMenuState(state, action: PayloadAction<boolean>) {
            state.menuState = action.payload;
        }
    }
})

export const { setMenuCollapsed, setMenuState } = settingCollapsed.actions;
export const getCollapsedState = (state: RootState) => state.menuCollapsed.collapsedState;
export const getMenuState = (state: RootState) => state.menuCollapsed.menuState;

export default settingCollapsed.reducer;
