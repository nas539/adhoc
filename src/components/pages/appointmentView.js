import React, { Component } from 'react';
import { slideInRight } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import { List, ListItem } from 'react-onsenui';
import Header from './header';
import Footer from './footer';



const styles = {
    slideInRight: {
        animation: 'x 1s',
        animationName: Radium.keyframes(slideInRight, 'slideInRight')
      }
  }

export default class MonthView extends Component {
   
    render() {
        return (
            
                <div className="monthview-page-wrapper" >
                    <Header />
                    <StyleRoot>
                    <div className="body-wrapper" style={styles.slideInRight}>
                    <List expandable>
                                Tap to expand
                                <div class="expandable-content">This is shown when expanded</div>
                    </List>
                    </div>
                    </StyleRoot>
                    <Footer />
                </div>
            
        )
    }
}
