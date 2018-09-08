import React, { Component } from 'react';


class ContactUs extends Component {
    render() {
        const contactuss = this.props.data;      

        const contactusNode = contactuss.map((contactus) => {
            return (
                <li key={contactus.id}>{contactus.header + "-" + contactus.body}</li>
            )
        });


        return (
            <div>
                <ul>{contactusNode}</ul>
            </div>
        )
    }
}
export default ContactUs;