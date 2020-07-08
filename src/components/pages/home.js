import React, { Component } from 'react';
import Header from "./header";
import Footer from "./footer";


export default class Home extends Component {
    render() {
        return (
            <div className="home-page-wrapper">
                <Header />
                <div className="body-wrapper">
                    When necessary or needed...
                </div>
                <Footer />
            </div>
        )
    }
}
