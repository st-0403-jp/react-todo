import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './presentationals/templates/Header';
import Footer from './presentationals/templates/Footer';
import List from './page/List';
import Detail from './page/Detail';

class Layout extends React.Component {
    render () {
        return (
            <>
                <Header />
                <main>
                    {this.props.children}
                </main>
                <Footer />
            </>
        );
    }
}

ReactDom.render(
    <Router>
        <Layout>
            <Route exact path="/" component={List}></Route>
            <Route path="/detail" component={Detail}></Route>
        </Layout>
    </Router>,
    document.getElementById('app-root')
);
