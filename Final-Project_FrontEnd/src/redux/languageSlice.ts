import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from '@reduxjs/toolkit'

export interface LanguageState {
    currentLanguage: string
}

const initialState: LanguageState = {
    currentLanguage: "zh"
}

export const languageSlice = createSlice({
    name: "language",
    initialState: initialState,
    reducers: {
        // language/changeLanguage
        changeLanguage: (state: LanguageState, action: PayloadAction<{
            languageCode: string,
        }>) => {
            state.currentLanguage =
                state.currentLanguage = action.payload.languageCode
        }
    }
})

export const languageAction = languageSlice.actions
export const languageReducer = languageSlice.reducer