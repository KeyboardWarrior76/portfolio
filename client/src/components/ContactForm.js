import React from "react";
import axios from "axios";


class ContactForm extends React.Component{
    state = { name: "", email: "", message: "", messageSent: false }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post("/api/send_message", { message: `\nName: ${this.state.name} \nEmail: ${this.state.email} \nMessage: ${this.state.message}`})
        .then((res) => console.log("success"))
        .catch((err) => console.log("failed to send message"));
        this.setState({ name: "", email: "", message: "", messageSent: true });
    }


    render() {
        return (
            <>
                <h2 className="contact-form__heading">
                    Send Messsage
                </h2>
                <form className="contact-form" onSubmit={this.handleSubmit} >
                    <input 
                        type="text"
                        name="name"
                        placeholder="name: "
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="email"
                        name="email"
                        placeholder="email: "
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <textarea
                        name="message"
                        placeholder="message: "
                        value={this.state.message}
                        onChange={this.handleChange}
                        required
                    ></textarea>
                    <button>Submit</button>
                    { this.state.messageSent
                    ? (
                        <div className="sent-prompt"> <h3>Message Sent</h3></div>
                    )
                    : null
                    }
                </form>
            </>
        )
    }
}

export { ContactForm };