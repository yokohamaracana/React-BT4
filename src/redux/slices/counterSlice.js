import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: {
      'name' : 'null',
      'color' : 'null',
    }
  },
  reducers: {
    increment: state => {
      state.value = {
        'name' : 'tien',
        'color' : 'red',
      }
    },
   
    update: (state, action) => {
      state.value = {
        'name' : action.payload.name,
        'color' : action.payload.color,
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, update } = counterSlice.actions

export default counterSlice.reducer