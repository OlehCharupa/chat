import { createSlice } from "@reduxjs/toolkit";
const initialState = []

const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        addArrayMsg(state, payload) {
            return [...state, ...payload]
        },
        getAllMessage(state, { payload }) {
            return [...payload]
        }
    }
})

const { actions, reducer } = messageSlice;
export const { addArrayMsg, getAllMessage } = actions
export default reducer