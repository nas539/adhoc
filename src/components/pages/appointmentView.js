import React, { Component } from 'react';
import { slideInRight } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import ReactDOM from "react-dom";
import Popup from "reactjs-popup";

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
            data: [],
            username: "",
        }

        // this.handleDelete = this.handleDelete.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.getAppointments = this.getAppointments.bind(this);
    }

    // handleDelete(id) {
    //     fetch(`http://127.0.0.1:5000/appointment/delete/${this.props.key}`, { method: "DELETE" })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //     })
    //     .catch(error => console.log(error))
    // }

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
        .then(response => response.json())
        .then(data => {
            console.log(data); 
            this.setState({
                data: data
            }) 
         })
        .catch(error => {
            console.log(error)
        })
        
    }

    renderAppointments() {
        return (
            <ul>
                {this.state.data.map(item => (
                    <li className="appointment" key={item.id}>
                       <Popup modal trigger={<button>{item.title}: {item.company}</button>}>
                            <ul>
                                <li>Title: {item.title}</li>
                                <li>Company: {item.company}</li>
                                <li>Date: {item.date}</li>
                                <li>Time: {item.time}</li>
                            </ul>
                       </Popup>
                    </li>
                    
                ))}
            </ul>
        )
       
    }
   
    render() {
        return (
                <div className="monthview-page-wrapper" >
                    <Header />
                    <StyleRoot className="middle">
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
                                <button type="button" onClick={this.getAppointments}>Get Appointments</button>
                            </div>
                            
                            <div className="appointments">
                                {this.renderAppointments()}
                            </div>
                            
                        </div>
                    </StyleRoot>
                    <Footer />
                </div> 
        )
    }
}
