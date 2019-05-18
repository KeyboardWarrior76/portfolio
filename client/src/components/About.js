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
                    <div className="about-me">
                        <h1 className="about-me__title">About Me</h1>
                        <div className="about-me__contents">
                            <p>Web Developer and University of Utah Coding Bootcamp graduate pursuing a career on the backend. I make web servers with Ruby and Ruby on Rails, and user interfaces with React and ES6 Javascript. With a personal interest in the Python Programming Language and Data Science, scripting languages are my domain.</p>
                            <br/>
                            {/* <p>If you're feeling adventurous, click the keyboard icon at the bottom and follow the directions in the terminal. If you like what you see, you can send me a message there too.</p> */}
                        </div>
                        <p className="about-me__terminal-disclaimer">
                            * If you're feeling adventurous, click the keyboard icon at the bottom and follow the directions in the terminal.
                        </p>
                    </div>
                    <div className="skills">
                    
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


export { About };