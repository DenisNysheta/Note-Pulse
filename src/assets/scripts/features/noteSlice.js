import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
    name: "note",
    initialState: {
        catalog: []
    },
    reducers: {
        addNote: (state, action) => {
            state.catalog.push(action.payload)
        },

        removeNote: (state, action) => {
            state.catalog = state.catalog.filter( note => note.payload.id !== action.id)
        }
    }
})

export const { addNote, removeNote } = noteSlice.actions
export default noteSlice.reducer