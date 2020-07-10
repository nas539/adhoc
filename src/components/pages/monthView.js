import React, { Component } from 'react';
import MonthCalendar from './monthCalendar'
import { List, ListItem } from 'react-onsenui';
import Header from './header';
import Footer from './footer';

export default class MonthView extends Component {
   
    render() {
        return (
            <div className="monthview-page-wrapper">
                <Header />
                
                <div className="body-wrapper">
                <ListItem expandable>
                            Tap to expand
                            <div class="expandable-content">This is shown when expanded</div>
                </ListItem>
                </div>
                <Footer />
            </div>
        )
    }
}
