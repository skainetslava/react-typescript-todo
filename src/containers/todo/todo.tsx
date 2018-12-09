import * as React from 'react';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ITodoAction } from 'src/actions';
import { TodoComponent } from 'src/components/todo';
import { getTodos } from 'src/reducers/selectors';
import { ITodo } from 'src/reducers/todo';
import { IStore } from 'src/store';

export interface ITodoContainerProps {
    todos?: ITodo[]
}

export interface ITodoContainerState {
    readonly value:string
}


export class TodoContainer extends React.Component<ITodoContainerProps, ITodoContainerState> {
    public render() {
        const { todos } = this.props;

        return (
           todos ?
            <TodoComponent list={todos} />
            : null
        )
    }
}

const mapStateToProps = (state: IStore) => ({
    todos: getTodos(state)
});

const mapDispatchToProps = (dispatch: Dispatch<ITodoAction>) => ({

})


export default connect<{}, {}, ITodoContainerProps>(mapStateToProps, mapDispatchToProps)(TodoContainer);