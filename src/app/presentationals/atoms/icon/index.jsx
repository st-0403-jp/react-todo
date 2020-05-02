import React from 'react';
import css from './style.css';

const iconData = [
    ['check', `fas fa-check-circle ${css.icon_check}`],
    ['cross', `fas fa-times-circle ${css.icon_cross}`]
];

class TodoDetail extends React.Component {
    render () {
        const { type } = this.props;
        const iconDataMap = new Map(iconData);
        return <i className={iconDataMap.get(type)}></i>
    }
}

export default TodoDetail;
