import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    firstname: "Mike",
    lastname: "Alpha",
    email: "mike@alpha.com",
    phone: "+91 9876543210",
    designation: "Software Developer",
    location: "Ahmedabad, IN"
}

export const personalSlice = createSlice({
    name: 'personal',
    initialState,
    reducers: {
        setPersonal: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        }
    },
})

export const { setPersonal } = personalSlice.actions

export default personalSlice.reducer