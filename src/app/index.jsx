import React from 'react';
import ReactDom from 'react-dom';
import { Provider, connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
// import { ConnectedRouter } from 'connected-react-router';
// import history from 'history';
// import PropTypes from 'prop-types';

import { STORAGE_NAME } from '../assets/constant';
import store from './store';
import { actionSetTasks, actionAddTasks } from './store/actions';

import Header from './presentationals/templates/Header';
// import Footer from './presentationals/templates/Footer';
import List from './page/List';
import Detail from './page/Detail';

class Layout extends React.Component {
    render() {
        return (
            <>
                <Header />
                <main>
                    {this.props.children}
                </main>
            </>
        );
    }
};

class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Route exact path="/" component={List}></Route>
                    <Route path="/detail" component={Detail}></Route>
                </Layout>
            </BrowserRouter>
        )
    }
}

// connect store
// 変数の管理をする関数
const mapStateToProps = store => ({
    tasks: store.tasks
});

// 関数の管理をする関数
const mapDispatchToProps = dispatch => {
    return {
        add: payload => dispatch(actionAddTasks(payload))
    };
};

const RouterByConnectedStore = connect(
    mapStateToProps,
    mapDispatchToProps
)(Router);

// init store
function setLocalStorage(name, data) {
    window.localStorage.setItem(name, JSON.stringify(data));
};
function getLocalStorage(name) {
    return JSON.parse(window.localStorage.getItem(name));
};

function initTasks() {
    const storageTasks = getLocalStorage(STORAGE_NAME)
    const tasks = (!storageTasks || storageTasks.length === 0) ? [] : storageTasks;
    setLocalStorage(STORAGE_NAME, tasks);
    store.dispatch(actionSetTasks(tasks))
};

initTasks();

ReactDom.render(
    <Provider store={store}>
        <RouterByConnectedStore />
    </Provider>,
    document.getElementById('app-root')
);
