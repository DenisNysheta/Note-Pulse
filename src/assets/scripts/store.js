import { configureStore } from "@reduxjs/toolkit";
import  notesReducer  from "./features/noteSlice.js";
import counterReducer from "./features/counterSlice.js";
import registrationReducer from "./features/registrationSlice.js"

export default configureStore({
    reducer: {
        notes: notesReducer,
        count: counterReducer,
        registration: registrationReducer
    }
})