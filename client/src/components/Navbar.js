import React from "react";


class Navbar extends React.Component {

    handleClick = (selected) => {
        if(this.props.screenloaded) {
            this.props.setSelected(selected);
        }
    }
    
    render() {
        const { selected } = this.props;
        return (
            <nav className="navbar">
                <div className="navbar__left">
                    <button 
                        className="navbar__item"
                        onClick={() => this.handleClick("about")}
                        style={ selected === "about"? styles.navItem : {}}
                    >About</button>

                    <button 
                        className="navbar__item"
                        onClick={() => this.handleClick("work")}
                        style={ selected === "work"? styles.navItem : {}}
                    >Work</button>

                    <button 
                        className="navbar__item"
                        onClick={() => this.handleClick("contact")}
                        style={ selected === "contact"? styles.navItem : {}}  
                    >Contact</button>
                </div>
    
                <div className="navbar__right">
                    <a href="https://linkedin.com/in/nicholas-ristagno" target="_blank" >
                        <img 
                            src={require("../images/linkedin.svg")}
                            alt="linkedin" 
                            className="navbar__right__link"
                        />
                    </a>
                    <a href="https://github.com/3mpirical/" target="_blank" >
                        <img 
                            src={require("../images/github.svg")} 
                            alt="github" 
                            className="navbar__right__link"
                        />
                    </a>
                    <h2 className="navbar__right__name" >{ "<Nicholas Ristagno>" }</h2>
                </div>
            </nav>
        )
    }
}

const styles = {
    navItem: {
        color: "#66ffff",
        textShadow: "#00ffff 0 0 7px",
    }
}



export { Navbar };