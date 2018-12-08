import * as React from 'react';

import { TodoComponent } from '../../components/todo';

export interface ITodo {
    id: number;
    label: string;
}

export default class TodoContainer extends React.Component<{}, {}> {
    public render() {
        
        const list: ITodo[] = [
            {
                id: 1,
                label: "One action"
            },
            {
                id: 2,
                label: "Two action"
            }
        ]

        return (
            <TodoComponent list={list} />
        )
    }
}