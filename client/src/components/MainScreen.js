import React from "react";
import { About } from "./About";
import { Contact } from "./Contact";
import { Work } from "./Work";
import { Terminal } from "./terminal/Terminal";


class MainScreen extends React.Component {

    renderScreen = () => {
        switch(this.props.selected) {
            case("about"):
                return <About />
            case("work"):
                return <Work />
            case("contact"):
                return <Contact /> 
            default:
                return null;
        }
    };

    render() {
        return(
            <div className="mainscreen">
                <Terminal terminalToggled={this.props.terminalToggled} />
                { this.renderScreen() }
            </div>
        )
    }
}


export { MainScreen };