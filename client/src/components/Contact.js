import React from "react";
import anime from "animejs";
import { ScreenChange } from "./ScreenChange";
import { ContactForm } from "./ContactForm";


class Contact extends React.Component {

    contactRef = React.createRef();
    isEdge = navigator.userAgent.indexOf('Edge') >= 0;

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
                >
                    <div className="contact-form__container">
                        <ContactForm />
                    </div>
                    
                    <h2 className="salt-lake-city">Salt Lake City, UT</h2>

                    <div  
                        className="contact-map__container" 
                        style={ this.isEdge
                            ? { position: "static", height: "100%", width: "100%", }
                            : null
                        }
                    >
                        <iframe 
                            title="my house"
                            className="contact-map"
                            src="https://snazzymaps.com/embed/158480" ßß 
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