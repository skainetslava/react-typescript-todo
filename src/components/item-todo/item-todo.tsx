import * as React from 'react';

import './item-todo.scss';

export interface IItemTodo {
    id: number,
    label: string
}

const ItemTodo: React.SFC<IItemTodo> = ({ id, label }) => {
    return (
        <li className="todo__list__item">
            <span className="todo__list__item_label">{label}</span>
            <span className="todo__list__item_remove">X</span>
        </li>
    );
}

export default ItemTodo;