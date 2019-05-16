import React from "react";
import { About } from "./About";
import { Contact } from "./Contact";
import { Work } from "./Work";
import { Terminal } from "./terminal/Terminal";


class MainScreen extends React.Component {

    renderScreen = () => {
        const { loaded, toggleScreenLoaded } = this.props;
        switch(this.props.selected) {
            case("about"):
                return (
                    <About 
                        loaded={loaded} 
                        toggleScreenLoaded={toggleScreenLoaded}
                    />
                )
            case("work"):
                return (
                    <Work 
                        loaded={loaded} 
                        toggleScreenLoaded={toggleScreenLoaded}
                    />
                )
            case("contact"):
                return (
                    <Contact 
                        loaded={loaded} 
                        toggleScreenLoaded={toggleScreenLoaded} 
                    /> 
                )
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