import React from 'react';
import TodoList from '../../presentationals/templates/TodoList';
import css from './style.css';

class List extends React.Component {
    constructor(props) {
        super(props);
        // clickイベントにthis（このコンポーネント自身）をバインド → おまじないに近い
        this.clickNew = this.clickNew.bind(this);
    }

    clickNew() {
        this.props.actions.addTasks();
    }

    render() {
        const { storeTasks } = this.props
        const { wrap, new_btn } = css;
        return (
            <>
                <div className={wrap}>
                    <TodoList data={storeTasks} />
                </div>
                <i className={new_btn} onClick={this.clickNew}>+</i>
            </>
        );
    }
}

export default List;
