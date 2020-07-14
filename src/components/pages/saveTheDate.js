import React, { Component } from 'react';
import { slideInRight } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import DatePicker from "react-datepicker";
import { registerLocale } from  "react-datepicker";
import en from 'date-fns/locale/es';
import Cookies from "js-cookie"

import Header from "./header";
import Footer from "./footer";

registerLocale('en', en)

const styles = {
    slideInRight: {
        animation: 'x 1s',
        animationName: Radium.keyframes(slideInRight, 'slideInRight')
      }
  }
 
import "react-datepicker/dist/react-datepicker.css";

export default class SaveTheDateome extends Component {
    constructor(props){
        super(props);

        this.state = {
            startDate: new Date(),
            title: "",
            company: "",
            username: ""
        }
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange = date => {
        this.setState({
              startDate: date
        });  
      }

      handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorMessage: "none"
        })
      }

      handleClick(event) {
        event.preventDefault();
        JSON.stringify(this.state.startDate)
        fetch("http://127.0.0.1:5000/appointment/add", {
                mode: "no-cors",
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    title: this.state.title,
                    company: this.state.company,
                    startDate: this.state.startDate,
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
                    <StyleRoot>
                        <div className="body-wrapper"style={styles.slideInRight}>
                               <div className="sheduler-section">
                                     <p>Title: </p>
                                    <input 
                                        type="text" 
                                        name="title" 
                                        value={this.state.title} 
                                        placeholder="Title"
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

                                <div className="sheduler-section">
                                <p>Date & Time: </p>
                                    <DatePicker
                                        locale="en"
                                        selected={this.state.startDate}
                                        onChange={this.handleChange}
                                        showTimeSelect
                                        dateFormat="Pp"
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
                    <Footer />
                </div>
        )
    }
}