import React from "react";
import anime from "animejs";
import { ScreenChange } from "./ScreenChange";
import { ContactForm } from "./ContactForm";


class Contact extends React.Component {

    contactRef = React.createRef();

    componentDidUpdate(prevProps) {
        if(!prevProps.loaded && this.props.loaded) {
            anime({
                targets: this.contactRef.current,
                opacity: 1,
                duration: 500,
                easing: "linear",
            })
        }
    }

    render() {
        return (
            <>
                <div 
                    className="contact"
                    ref={this.contactRef}
                    // style={this.props.loaded? {} : {opacity: "0"}}
                >
                    <div className="contact-form__container">
                        <ContactForm />
                    </div>
                    
                    <h2 className="salt-lake-city">Salt Lake City, UT</h2>

                    <div style={{height: "100vh", overflow: "hidden"}}>
                        <iframe 
                            title="my house"
                            className="map-container"
                            src="https://snazzymaps.com/embed/158480" 
                            width="100%" 
                            height="100%" 
                        ></iframe>

                    </div>
                </div>
                <ScreenChange 
                    loaded={this.props.loaded} 
                    toggleScreenLoaded={this.props.toggleScreenLoaded} 
                />
            </>
        )
    }
}


export { Contact };