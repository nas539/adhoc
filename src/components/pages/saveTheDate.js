import React, { Component } from 'react';
import Header from "./header";
import Footer from "./footer";

import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import en from 'date-fns/locale/es';
registerLocale('en', en)
 
import "react-datepicker/dist/react-datepicker.css";

export default class SaveTheDateome extends Component {
    constructor(props){
        super(props);

        this.state = {
            startDate: new Date()
        }

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange = date => {
        this.setState({
          startDate: date
        });
      };

    render() {
        return (
            <div className="save-the-date-page-wrapper">
                <Header />
                <div className="body-wrapper">
                     <form>
                         <div className="sheduler-section">
                             <p>Title: </p>
                             <input type="text" name="title" value="title" placeholder="Title"></input>
                         </div>
                         <div className="sheduler-section">
                             <p>Company: </p>
                             <input type="text" name="company" value="company" placeholder="Company"></input>
                         </div>
                         <DatePicker
                            locale="en"
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                            showTimeSelect
                            dateFormat="Pp"
                        />
                     </form>
                </div>
                <Footer />
            </div>
        )
    }
}