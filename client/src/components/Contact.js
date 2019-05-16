import React from "react";
import { ScreenChange } from "./ScreenChange";
import anime from "animejs";


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
                    <h2 className="contact__heading">
                        Send Messsage
                    </h2>
                    
                    <div className="map__i-live-here">
                    </div>

                    <div className="map-container">
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