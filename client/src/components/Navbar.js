import React from "react";


class Navbar extends React.Component {
    
    render() {
        const { selected, setSelected } = this.props;
        return (
            <nav className="navbar">
                <div className="navbar__left">
                    <button 
                        className="navbar__item"
                        onClick={() => setSelected("about")}
                        style={ selected === "about"? styles.navItem : {}}
                    >About</button>

                    <button 
                        className="navbar__item"
                        onClick={() => setSelected("work")}
                        style={ selected === "work"? styles.navItem : {}}
                    >Work</button>

                    <button 
                        className="navbar__item"
                        onClick={() => setSelected("contact")}  
                        style={ selected === "contact"? styles.navItem : {}}  
                    >Contact</button>
                </div>
    
                <div className="navbar__right">
                    <h2 className="navbar__name" >NICHOLAS RISTAGNO</h2>
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