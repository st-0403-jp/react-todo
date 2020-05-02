import React from 'react';
import css from './style.css';
import Icon from '../../atoms/icon';

class TodoDetail extends React.Component {
    render () {
        const { data } = this.props;
        return (
            <div className={css.content}>
                <div className={css.title}>{data.title}</div>
                <div className={css.description}>{data.description}</div>
                <div className={css.icon}>
                    <Icon type="check" size="30" />
                    <Icon type="cross" size="30" />
                </div>
            </div>
        );
    }
}

export default TodoDetail;
