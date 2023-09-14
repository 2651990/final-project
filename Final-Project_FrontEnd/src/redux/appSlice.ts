import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from '@reduxjs/toolkit'

export interface AppState {
    title: string
    isShowTabs: boolean
}

const initialState: AppState = {
    title: "Camp Express",
    isShowTabs: true
}

export const appSlice = createSlice({
    name: "APP",
    initialState: initialState,
    reducers: {
        // language/changeLanguage
        changeTitle: (state: AppState, action: PayloadAction<{
            title: string,
        }>) => {
            state.title = action.payload.title
        },
        updateIsShowTab: (state: AppState, payloadAction: PayloadAction<boolean>) => {
            state.isShowTabs = payloadAction.payload
        }
    }
})

export const appAction = appSlice.actions
export const appReducer = appSlice.reducer