import React from "react";


class ContactForm extends React.Component{
    state = { name: "", email: "", message: "", messageSent: false }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ name: "", email: "", message: "", messageSent: true });
        console.log("message is being sent!!")
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