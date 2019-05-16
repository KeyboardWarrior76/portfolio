import React from "react";
import anime from "animejs";
import { ScreenChange } from "./ScreenChange";


class About extends React.Component {

    aboutRef = React.createRef();

    componentDidUpdate(prevProps) {
        if(!prevProps.loaded && this.props.loaded) {
            anime({
                targets: this.aboutRef.current,
                opacity: 1,
                duration: 500,
                easing: "linear",
            })
        }
    }

    render() {
        return (
            <>
                <div className="about" ref={this.aboutRef} >
                    <h3>about page goes here</h3>
                </div>
                <ScreenChange 
                    loaded={this.props.loaded} 
                    toggleScreenLoaded={this.props.toggleScreenLoaded} 
                />
            </>
        )
    }
}


export { About };