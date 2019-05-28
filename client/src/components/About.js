import React from "react";
import anime from "animejs";
import { ScreenChange } from "./ScreenChange";
import { Meteor } from "./Metoer";


class About extends React.Component {
    state = { 
        mounted: false, 
        // Metoers are entered in state so Math.random()
        // doesn't recalculate every time state updates.
        meteors: [
            ...[1,2].map((item ,index) => (
                <Meteor
                    key={Math.random() * (index + 1)} 
                    left={`${Math.floor(Math.random() * 90)}%`} 
                    top={`${Math.floor(Math.random() * 90)}%`}  
                    size={`${Math.round(Math.random() * 9 + 1)}rem`}
                />
            )),
            ...[1,2,3].map((item ,index) => (
                <Meteor
                    key={Math.random() * (index + 1)} 
                    left={`${Math.floor(Math.random() * 90)}%`} 
                    top={`${Math.floor(Math.random() * 90)}%`}  
                    size={`${Math.round(Math.random() * 6 + 1)}rem`}
                />
            )),
            ...[1,2,3,4,5].map((item ,index) => (
                <Meteor 
                    key={Math.random() * (index + 1)} 
                    left={`${Math.floor(Math.random() * 90)}%`} 
                    top={`${Math.floor(Math.random() * 90)}%`}  
                    size={`${Math.round(Math.random() * 3 + 1)}rem`}
                />
            )),
            
        ] 
    }


    aboutRef = React.createRef();

    componentDidMount() {
        this.setState({ mounted: true });
    }

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
                        </div>
                        <p className="about-me__terminal-disclaimer">
                            If you're feeling adventurous, click the keyboard icon at the bottom and follow the directions in the terminal.
                        </p>
                    </div>
                    <div className="skills">
                        {  this.state.meteors }
                        <div className="skills__section">
                            <h2 className="skills__header">Backend</h2>
                            <ul>
                                <li>Ruby, Ruby on Rails</li>
                                <li>Node.js, Express</li>
                                <li>Postgresql, Active Record</li>
                                <li>MongoDB, Mongoose</li>
                                <li>Rest APIs</li>
                            </ul>
                        </div>

                        <div className="skills__section skills__section--middle">
                            <h2 className="skills__header">Frontend</h2>
                            <ul>
                                <li>Javascript, React</li>
                                <li>SASS & CSS3</li>
                                <li>Anime.js</li>
                                <li>Styled Components</li>
                                <li>Templating Engines</li>
                            </ul>
                        </div>

                        <div className="skills__section">
                            <h2 className="skills__header">Skills</h2>
                            <ul>
                                <li>Agile, Scrum, & Kanban</li>
                                <li>Git & Github</li>
                                <li>Netlify</li>
                                <li>Heroku</li>
                                <li>Cloudinary</li>
                            </ul>
                        </div>
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