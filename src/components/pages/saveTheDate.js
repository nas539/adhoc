import React, { Component } from 'react';
import { slideInRight } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Calendar from 'react-calendar';
import TimePicker from 'react-time-picker';

import Header from "./header";
import Footer from "./footer";

const styles = {
    slideInRight: {
        animation: 'x 1s',
        animationName: Radium.keyframes(slideInRight, 'slideInRight')
      }
  }
 
export default class SaveTheDateome extends Component {
    constructor(props){
        super(props);

        this.state = {
            date: new Date(),
            title: "",
            company: "",
            time: "10:00",
            username: ""
        }

        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange = date => {
        this.setState({
              date: date
        });  
      }

      handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
      }

      handleTimeChange = time => this.setState({ time: this.state.time })

      handleClick(event) {
        event.preventDefault();
        fetch("https://nas-adhoc-backend.herokuapp.com//appointment/add", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    title: this.state.title,
                    company: this.state.company,
                    date: this.state.date,
                    time: this.state.time,
                    username: this.state.username
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
             })
            .catch(error => {
                console.log(error)
             })
      }

    render() {
        return (
                <div className="save-the-date-page-wrapper" >
                    <Header />
                    <div className="middle-section-wrapper">
                        <StyleRoot className="middle">
                            <div className="body-wrapper"style={styles.slideInRight}>
                                <div className="sheduler-section">
                                        <p>Title: </p>
                                        <input 
                                            type="text" 
                                            name="title" 
                                            value={this.state.title} 
                                            placeholder="ex: Interview, Follow up..."
                                            onChange={this.handleInputChange}
                                        />
                                    </div>

                                    <div className="sheduler-section">
                                        <p>Company: </p>
                                        <input 
                                            type="text" 
                                            name="company" 
                                            value={this.state.company} 
                                            placeholder="Company"
                                            onChange={this.handleInputChange}
                                        />
                                    </div>

                                    <div className="sheduler-section calendar-wrapper">
                                        <p>Date: </p>
                                        <Calendar
                                            onChange={this.onChange}
                                            value={this.state.date}
                                        />
                                    </div>

                                    <div className="sheduler-section">
                                        <p>Time: </p>
                                        <TimePicker 
                                            className="time-wrapper"
                                            onChange={this.handleTimeChange}
                                            value={this.state.time}
                                        />
                                    </div>

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
                                    
                                    <button type="submit" onClick={this.handleClick}>Save</button>

                            </div>
                        </StyleRoot>
                    </div>
                    <Footer />
                </div>
        )
    }
}