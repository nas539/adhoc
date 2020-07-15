import React, { Component } from 'react';
import { slideInRight } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

import Header from './header';
import Footer from './footer';

const styles = {
    slideInRight: {
        animation: 'x 1s',
        animationName: Radium.keyframes(slideInRight, 'slideInRight')
      }
  }

export default class MonthView extends Component {
    constructor(props){
        super(props);

        this.state = {
            items: [],
            username: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.getAppointments = this.getAppointments.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
      }

    getAppointments() {
        fetch(`http://127.0.0.1:5000/appointment/get/data/${this.state.username}`, {
            method: "GET",
            header: { "Content-Type": "application/json" }
        })
        .then(response => response.json()
            
            // let array = Array.from(response.json())
            // console.log(array); 
            // this.setState({items: array});
            // console.log(items); 
        )
        .then(data => {
            console.log(data);  
         })
        // .then(data => {
        //     this.setState({ data: data })
        //     console.log(data)
        // })
        .catch(error => {
            console.log(error)
        })
        
    }

    // renderAppointments() {
    //     const apppointmentContainer = [];
    //     this.state.data.forEach(appointmentData => {
    //         apppointmentContainer.push(
    //             <SingleAppointment
    //                 key={appointmentData.id}
    //                 id={appointmentData.id}
    //                 title={appointmentData.title}
    //                 company={appointmentData.company}
    //                 startDate={appointmentData.start_date}
    //                 handleDelete={this.handleDelete}
    //             />
    //         )
    //     })
    //     return apppointmentContainer;
    // }
   
    render() {
        return (
                <div className="monthview-page-wrapper" >
                    <Header />
                    <StyleRoot>
                        <div className="body-wrapper" style={styles.slideInRight}>
                            <div className="sheduler-section">
                                <p>Username: </p>
                                <input 
                                    type="text" 
                                    name="username" 
                                    value={this.state.username} 
                                    placeholder="Username"
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <button type="button" onClick={this.getAppointments}>Get Appointments</button>
                            {/* {this.renderAppointments()} */}
                        </div>
                    </StyleRoot>
                    <Footer />
                </div> 
        )
    }
}
