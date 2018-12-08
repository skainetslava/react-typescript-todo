import * as React from 'react';

import { ITodo } from '../../containers/todo/todo';
import { ListTodo } from '../list-todo';


interface ITodoContainerProps {
    list: ITodo[]
}

export const TodoContainer: React.SFC<ITodoContainerProps> = ({ list }) => {
    return (
        <div className="todo">
            <ListTodo list={list} />
        </div>
    )
}

export default TodoContainer;