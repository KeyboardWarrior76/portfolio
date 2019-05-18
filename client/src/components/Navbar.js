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
                    <h2 className="navbar__name" >{ "<Nicholas Ristagno>" }</h2>
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