import {createSlice} from "@reduxjs/toolkit"

const initialState = {
	insurance: undefined,
	name: ""
};

const insuranceSlice = createSlice({
	name: 'insurance',
	initialState: initialState,
	reducers: {
		updateInsurance(state, action) {
			state.insurance = action.payload
		},
		updateDrivers(state, action){
			state.insurance.drivers = action.payload
		},
		updateInsuranceName(state, action){
			state.name = action.payload
		}
	}
})

export const {updateInsurance, updateDrivers, updateInsuranceName} = insuranceSlice.actions;

export default insuranceSlice.reducer;