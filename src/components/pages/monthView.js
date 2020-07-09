import React, { Component } from 'react';
import dateFns from "date-fns";
import Header from './header';
import Footer from './footer';

export default class MonthView extends Component {
   
    render() {
        return (
            <div className="monthview-page-wrapper">
                <Header />
                <div className="body-wrapper">
                    
                </div>
                <Footer />
            </div>
        )
    }
}
