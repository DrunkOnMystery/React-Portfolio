import React from "react";
import '../styles/BodyContact.css';

function BodyContact() {
    return (
        <div className="BodyContact">
            <div>
                <form id="contact-form">
                    <label id="name-label" for="name"><strong>Name:</strong></label>
                    <br></br>
                    <input type="text" id="name" placeholder="John Doe" required />
                    <br></br>
                    <label id="email-label" for="email"><strong>Email:</strong></label>
                    <br></br>
                    <input type="email" id="email" placeholder="name@gmail.com" required />
                    <br></br>
                    <label id="message" for="name"><strong>Leave A Message:</strong></label>
                    <br></br>
                    <textarea rows="10" cols="100"></textarea>
                    <br></br>
                    <button id="submit" type="submit">Click Here To Submit!</button>
                </form>
            </div>
            <div>
                <h4><a href="mailto: bbrumby00@gmail.com">Email</a></h4>
                <h4><a target="_blank" href="https://www.linkedin.com/in/benjamin-brumby-98183546/">LinkedIn</a></h4>
                <h4><a target="_blank" href="https://github.com/DrunkOnMystery">Github</a> </h4>
            </div>
        </div>
    )
}

export default BodyContact;