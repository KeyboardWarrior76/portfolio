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
        console.log(this.props.loaded)
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
        anime.timeline()
        .add({
            targets: event.target,
            duration: 0,
            scale: 0.01,
            easing: 'easeInOutCirc',
        })
        .add({
            targets: event.target,
            duration: 500,
            scale: 1,
            easing: 'linear',
            delay: 3000,
        })

        ///// COLOR ANIMATION //////
        // anime.timeline()
        // .add({
        //     targets: event.target,
        //     color: color,
        //     duration: 0,
        //     easing: 'easeInOutCirc',
        // })
        // .add({
        //     targets: event.target,
        //     color: "#00ffff",
        //     duration: 2500,
        //     easing: 'linear',
        // })
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
                            <h1 className="about-me__title">{ this.mapGlitch("About Me", "#76FF03")}</h1>
                            <div className="about-me__contents">
                                <p>{ this.mapGlitch("Web Developer and University of Utah Coding Bootcamp graduate pursuing a career on the backend. I make web servers with Ruby and Ruby on Rails, and user interfaces with React and ES6 Javascript. With a personal interest in the Python Programming Language and Data Science, scripting languages are my domain.", "#76FF03") }</p>
                                <br/>
                            </div>

                            <img 
                                src={require("../images/atom.svg")} 
                                alt="atom" 
                                className="about-me__atom"/
                            >
                        </div>

                        <div className="about-me__terminal-disclaimer__container">
                            <p className="about-me__terminal-disclaimer">
                            {this.mapGlitch("If you're feeling adventurous, click the keyboard icon at the bottom and follow the directions in the terminal.", "#76FF03")}
                            </p>
                        </div>
                    </div>
                    <div className="skills">
                        {  this.state.meteors }
                        <div className="skills__section">
                            <h2 className="skills__header"> {this.mapGlitch("Backend", "#76FF03")}</h2>
                            <ul>
                                <li>{this.mapGlitch("Ruby, Ruby on Rails", "#76FF03")}</li>
                                <li>{this.mapGlitch("Node.js, Express", "#76FF03")}</li>
                                <li>{this.mapGlitch("Postgresql, Active Record", "#76FF03")}</li>
                                <li>{this.mapGlitch("MongoDB, Mongoose", "#76FF03")}</li>
                                <li>{this.mapGlitch("Rest APIs", "#76FF03")}</li>
                            </ul>
                        </div>

                        <div className="skills__section skills__section--middle">
                            <h2 className="skills__header">{this.mapGlitch("Frontend", "#76FF03")}</h2>
                            <ul>
                                <li>{this.mapGlitch("Javascript, React", "#76FF03")}</li>
                                <li>{this.mapGlitch("SASS & CSS3", "#76FF03")}</li>
                                <li>{this.mapGlitch("Anime.js", "#76FF03")}</li>
                                <li>{this.mapGlitch("Styled Components", "#76FF03")}</li>
                                <li>{this.mapGlitch("Templating Engines", "#76FF03")}</li>
                            </ul>
                        </div>

                        <div className="skills__section">
                            <h2 className="skills__header">{this.mapGlitch("Skills", "#76FF03")}</h2>
                            <ul>
                                <li>{this.mapGlitch("Agile, Scrum, & Kanban", "#76FF03")}</li>
                                <li>{this.mapGlitch("Git & Github", "#76FF03")}</li>
                                <li>{this.mapGlitch("Netlify", "#76FF03")}</li>
                                <li>{this.mapGlitch("Heroku", "#76FF03")}</li>
                                <li>{this.mapGlitch("Cloudinary", "#76FF03")}</li>
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