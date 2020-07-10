import React, { Component } from 'react';
import { List, ListItem } from 'react-onsenui';
import Header from './header';
import Footer from './footer';

export default class MonthView extends Component {
   
    render() {
        return (
            <div className="monthview-page-wrapper">
                <Header />
                
                <div className="body-wrapper">
                <List expandable>
                            Tap to expand
                            <div class="expandable-content">This is shown when expanded</div>
                </List>
                </div>
                <Footer />
            </div>
        )
    }
}
