import React from 'react';
import PropTypes from 'prop-types';
import css from './style.css';

const iconData = [
    ['check', `fas fa-check-circle ${css.icon_check}`],
    ['cross', `fas fa-times-circle ${css.icon_cross}`]
];

class Icon extends React.Component {
    render () {
        const { type } = this.props;
        const iconDataMap = new Map(iconData);
        return <i className={iconDataMap.get(type)}></i>
    }
}

Icon.propTypes = {
    type: PropTypes.string
}

export default Icon;
