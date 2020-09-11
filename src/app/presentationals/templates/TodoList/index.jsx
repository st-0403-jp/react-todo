import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from './style.css';

class TodoList extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        const { data } = this.props;
        return (
            <ul className={css.list}>
                {data.map(({id, title}, index) => (
                    <li className={css.list_item} key={`${id}_${index}`}>
                        <Link to={`detail?id=${id}`} className={css.list_item_unit}>
                            <span>{title}</span>
                            <span className={css.list_item_unit_icon}>
                                <i className={`fas fa-check-circle ${css.icon_check}`}></i>
                                <i className={`fas fa-times-circle ${css.icon_cross}`}></i>
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        );
    }
}

TodoList.propTypes = {
    data: PropTypes.array
}

export default TodoList;
