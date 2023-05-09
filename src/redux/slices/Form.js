import { createSlice } from '@reduxjs/toolkit'

const initialState = {
     firstName: {
          error: null
     },
     lastName: {
          error: null
     },
     number: {
          error: null
     },
     place: {
          error: null
     },
     btnDisabled: false,
}

const regexName = /^[a-zA-Zа-яА-ЯёЁ]+(([',. -][a-zA-Zа-яА-ЯёЁ ])?[a-zA-Zа-яА-ЯёЁ]*)*$/
const regexNumber = /\d/

export const formSlice = createSlice({
     name: 'formSlice',
     initialState,
     reducers: {
          firstName: (state, action) => {
               if (!action.payload || !regexName.test(action.payload)) {
                    state.firstName.error = true
                    state.btnDisabled = true
               } else if (action.payload) {
                    state.firstName.error = false
                    state.btnDisabled = false
               }
          },
          lastName: (state, action) => {
               if (!action.payload || !regexName.test(action.payload)) {
                    state.lastName.error = true
                    state.btnDisabled = true
               } else if (action.payload) {
                    state.lastName.error = false
                    state.btnDisabled = false
               }
          },
          number: (state, action) => {
               if (!action.payload || !regexNumber.test(action.payload)) {
                    state.number.error = true
                    state.btnDisabled = true
               } else if (regexNumber.test(action.payload)) {
                    state.number.error = false
                    state.btnDisabled = false
               }
          },
          selectPlace: (state, action) => {
               if (!action.payload) {
                    state.place.error = true
                    state.btnDisabled = true
               } else {
                    state.place.error = false
                    state.btnDisabled = false
               }
          }
     }
})

export const { firstName, lastName, number, selectPlace } = formSlice.actions
export default formSlice.reducer