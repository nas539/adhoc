import React, { Component } from 'react';
import { slideInRight } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Header from "./header";
import Footer from "./footer";



const styles = {
    slideInRight: {
        animation: 'x 1s',
        animationName: Radium.keyframes(slideInRight, 'slideInRight')
      }
  }

export default class Home extends Component {
    render() {
        return (
            
                <div className="home-page-wrapper" >
                    <Header />
                    <StyleRoot className="middle">
                    <div className="body-wrapper" style={styles.slideInRight}>
                        <p>Looking for a job?</p> 
                        <p>ad.Hoc is there</p> 
                        <p>When necessary or needed...</p> 
                    </div>
                    </StyleRoot>
                    <Footer />
                </div>
           
        )
    }
}
