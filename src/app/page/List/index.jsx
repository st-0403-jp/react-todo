import React from 'react';
import TodoList from '../../presentationals/templates/TodoList';
import css from './style.css';
import store from '../../store';

import jsonNewData from '../../../assets/mock.task.new.json';

class List extends React.Component {
    constructor(props) {
        super(props);
        const storeState = store.getState();
        this.state = {
            tasks: storeState.tasks
        };
        // clickイベントにthis（このコンポーネント自身）をバインド → おまじないに近い
        this.clickNew = this.clickNew.bind(this);
    }

    newData() {
        return JSON.parse(JSON.stringify(jsonNewData));
    }

    clickNew() {
        const newData = this.newData();
        const tasks = this.state.tasks.concat();
        tasks.push(newData);
        this.setState({
            tasks
        });
    }

    render() {
        const { wrap, new_btn } = css;
        return (
            <>
                <div className={wrap}>
                    <TodoList data={this.state.tasks} />
                </div>
                <i className={new_btn} onClick={this.clickNew}>+</i>
            </>
        );
    }
}

export default List;
