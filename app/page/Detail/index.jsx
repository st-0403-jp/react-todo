import React from 'react';
import css from './style.css';
import TodoDetail from '../../presentationals/templates/TodoDetail';

import dataJson from '../../../assets/mockTask.json';

class Detail extends React.Component {
    getId () {
        const urlSearch = new URLSearchParams(this.props.location.search);
        return urlSearch.get('id');
    }

    getData () {
        const { data } = JSON.parse(JSON.stringify(dataJson));
        const currentData = data.filter(({ id }) => this.getId() === id);
        return currentData;
    }

    render () {
        const currentData = this.getData();
        if (currentData.length === 0) return <p>データが見つかりません。</p>;
        return (
            <div className={css.wrap}>
                <TodoDetail data={currentData[0]} />
            </div>
        );
    }
}

export default Detail;
