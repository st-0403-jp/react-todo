import React from 'react';
import TodoList from '../../presentationals/templates/TodoList';
import css from './style.css';

import dataJson from '../../../assets/mockTask.json';

class List extends React.Component {
    getData () {
        const { data } = JSON.parse(JSON.stringify(dataJson));
        return data;
    }

    render () {
        return (
            <div className={css.wrap}>
                <TodoList data={this.getData()} />
            </div>
        );
    }
}

export default List;
