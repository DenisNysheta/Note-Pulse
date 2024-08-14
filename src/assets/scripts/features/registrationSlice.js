import { createSlice } from "@reduxjs/toolkit";

export const registrationSlice = createSlice({
    name: "registration",
    initialState: {
        registration: true
    },
    reducers: {
        setRegistration: state => {
            state.registration = !state.registration
        }
    }
})

export const { setRegistration } = registrationSlice.actions
export default registrationSlice.reducer