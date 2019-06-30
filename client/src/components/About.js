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
    isEdge = navigator.userAgent.indexOf('Edge') >= 0;

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

    glitch = (event, color) => {

        ///// ERASE ANIMATION //////
        // anime.timeline()
        // .add({
        //     targets: event.target,
        //     duration: 0,
        //     scale: 0.01,
        //     easing: 'easeInOutCirc',
        // })
        // .add({
        //     targets: event.target,
        //     duration: 500,
        //     scale: 1,
        //     easing: 'linear',
        //     delay: 3000,
        // })

        ///// COLOR ANIMATION //////
        anime.timeline()
        .add({
            targets: event.target,
            // color: color,
            opacity: 0,
            duration: 200,
            easing: 'easeInOutCirc',
        })
        .add({
            targets: event.target,
            opacity: 1,
            color: "#00ffff",
            duration: 1300,
            easing: 'linear',
        })
    }

    mapGlitch = (text, color) => {
        return text.split(" ").map((word, index) => {
            return <span key={index} onMouseLeave={(event) => this.glitch(event, color)} style={{display: "inline-block", width: "static"}} >{ word }&nbsp;</span>
        })
    }

    render() {
        return (
            <>
                <div className="about" ref={this.aboutRef} >
                    <div className="about-me">
                        <div>
                            <h1 className="about-me__title">About Me</h1>
                            <div className="about-me__contents">
                                <p>Web Developer passionate about learning new technologies. Focused on making maintainable servers and interactive user interfaces with React and ES6 Javascript. Worked in development teams and operating rooms, and looking to apply my skills to a new career.</p>
                                <br/>
                            </div>

                            <img 
                                src={require("../images/atom.svg")} 
                                alt="atom" 
                                className={this.isEdge? "about-me__atom rotate" : "about-me__atom"}
                            />
                        </div>

                        <div className="about-me__terminal-disclaimer__container">
                            <p className="about-me__terminal-disclaimer">
                            If you're feeling adventurous, click the keyboard icon at the bottom and follow the directions in the terminal.
                            </p>
                        </div>
                    </div>
                    <div className="skills">
                        {  this.state.meteors }
                        <div className="skills__section">
                            <h2 className="skills__header"> Backend</h2>
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