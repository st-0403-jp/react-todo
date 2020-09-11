import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import css from './style.css';
import TodoDetail from '../../presentationals/templates/TodoDetail';

import dataJson from '../../../assets/mock.task.json';

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

Detail.propTypes = {
    location: ReactRouterPropTypes.location.isRequired
}

export default Detail;
