import { ITodoAction } from '../actions/index';

export interface ITodo {
    id: number;
    label: string;
}

export interface ITodoStoreState {
    todos: ITodo[]
}

const initialState:ITodoStoreState = {
    todos: [
        {
            id: 1,
            label: "One action"
        },
        {
            id: 2,
            label: "Two action"
        }
    ]
}


export default function todoReducer(state: ITodoStoreState = initialState, action:ITodoAction): ITodoStoreState {
    switch (action.type) {
        default:
            return state;
    }
}