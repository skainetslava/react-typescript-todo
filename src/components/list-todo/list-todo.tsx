import * as React from 'react';

import { ITodo } from '../../containers/todo/todo';
import { ItemTodo } from '../item-todo';

import './list-todo.scss';

interface IListTodoProps {
    list: ITodo[]
}

const ListTodo: React.SFC<IListTodoProps> = ({ list }) => {
    return (
        <ul className="todo__list">
            {
                list.map((item: ITodo) => {
                    return <ItemTodo key={item.id} id={item.id} label={item.label} />
                })
            }
        </ul>
    );
};

export default ListTodo;