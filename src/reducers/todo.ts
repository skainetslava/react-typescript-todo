import { ITodoAction } from '../actions/index';

export interface ITodoStoreState {

}

const initialState:ITodoStoreState = {

}


export default function reducer(state: ITodoStoreState = initialState, action:ITodoAction): ITodoStoreState {
    switch (action.type) {
        default:
            return state;
    }
}