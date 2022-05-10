import React, { Component } from "react";
import "../../assets/styles/customer.css";
import Button from '@mui/material/Button';

class Demo3 extends Component {

  render() {

    return (
      <div className="section">
      <div className="container">
          <div className="row">
              <div className="col-md-12">
                  <div className="section-title">
                      <h2 className="title">Contact Us</h2>
                      <p>Let us know what you think! In order to provide better service,
                           please do not hesitate to give us your feedback. Thank you.</p><hr/>
                      <form id="contact-form"  
                          method="POST">
                      <div className="form-group">
                      <div className="row">
                      <div className="column1">
                          <input placeholder = "Name"  id="name" type="text" 
                             className="form-control" required />
                      </div>
                      <div className="column1">
                          <input placeholder = "Email"  id="email" type="email"
                            className="form-control" aria-describedby="emailHelp"
                            required />
                      </div>
                      </div>
                      </div>
                      <div className="column1">
                          <input placeholder = "Subject"  id="subject" type="text"
                            className="form-control" required />
                      </div>
                      <div className="column2">
                          <textarea placeholder = "Message"  id="message" 
                             className="form-control" rows="1" 
                             required />
                      </div>
                      <div className="button1">
                      <Button variant="contained" style={{'color':"black"}} type="submit" className="primary-btn submit">Submit</Button>
                      </div>
                      </form>
                  </div>
              </div>

          </div>

      </div>
  </div>
);

  }

}


export default Demo3;