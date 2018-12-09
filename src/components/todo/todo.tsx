import * as React from 'react';

import { Input } from 'src/components/input';
import { ITodo } from 'src/reducers/todo';
import { ListTodo } from '../list-todo';

import './todo.scss';


interface ITodoComponentProps {
    list: ITodo[]
}

export const TodoComponent: React.SFC<ITodoComponentProps> = (props) => {
    return (
        <div className="todo">
            <h1>todos</h1>
            <Input value="sdsdsd" />
            <ListTodo {...props} />
        </div>
    )
}

export default TodoComponent;