import { createSlice } from '@reduxjs/toolkit'

const initialState = [{
    company: "Google LLC.",
    designation: "Software Developer",
    start: "09/2019", end: "10/2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qua igitur re ab deo vincitur, si aeternitate non vincitur? Vide, ne etiam menses! nisi forte eum dicis, qui, simul atque arripuit, interficit. Compensabatur, inquit, cum summis doloribus laetitia. Duo Reges: constructio interrete. Quos quidem tibi studiose et diligenter tractandos magnopere censeo. Illis videtur, qui illud non dubitant bonum dicere."
}]

export const workSlice = createSlice({
    name: 'work',
    initialState,
    reducers: {
        setWork: (state, action) => {
            return [
                ...state,
                ...action.payload
            ]
        }
    },
})

export const { setWork } = workSlice.actions

export default workSlice.reducer