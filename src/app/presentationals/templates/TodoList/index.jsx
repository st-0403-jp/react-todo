import React from 'react';
import { Link } from "react-router-dom";
import css from './style.css';

class TodoList extends React.Component {
    render () {
        const { data } = this.props;
        return (
            <ul className={css.list}>
                {data.map(({id, title}) => (
                    <li className={css.list_item} key={id}>
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

export default TodoList;
