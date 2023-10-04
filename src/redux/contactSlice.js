import { createSlice, nanoid } from '@reduxjs/toolkit'
import {  persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


 const contactSlice = createSlice({
    name: "contacts",
    initialState:{items:[]} ,
    reducers: {
        add: {
            reducer(state, action) {
                state.items.push(action.payload)
            },
            prepare(name,number) {
                return {
                    payload: {
                         name,
                    number,
                        id: nanoid()
                    }
                }       
            }
        },
        remove(state, action) {
            return state.filter(item=>item.id!==action.payload)
        }
    }
})

const persistConfig = {
  key: 'root',
    storage,
 
}
export const contactsReducer = persistReducer(
    persistConfig,contactSlice.reducer)

export const { add, remove} = contactSlice.actions;