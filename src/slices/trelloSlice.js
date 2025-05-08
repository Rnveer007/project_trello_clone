import { createSlice } from "@reduxjs/toolkit";
import { initData } from "../initData";

const trelloSlice = createSlice({
    name: "trelloClone",
    initialState: {
        input: {},
        lists: initData,

    },
    reducers: {
        setInput: function (state, action) {
            const { listId, value } = action.payload
            state.input[listId] = value
        },
        addTask: function (state, action) {
            const { listId } = action.payload
            const todoList = state.lists.find((list) => list.id === listId);
            const taskText = state.input[listId];

            if (todoList) {
                todoList.tasks.push({
                    task: taskText,
                    id: Date.now(),
                });
            }
            state.input[listId] = ""
        }
    }
})

export const { setInput, addTask } = trelloSlice.actions
export const trelloReducer = trelloSlice.reducer