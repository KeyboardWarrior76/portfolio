import React from "react";
import { state } from "./state.js";
import { terminal } from "./terminalInstance";
import { initTerminalRoutes } from "./terminalRoutes";

let terminalDisplay;

class Terminal extends React.Component {
    state = { input: "" }

    displayRef = React.createRef()
    inputRef = React.createRef()

    componentDidMount() {
        initTerminalRoutes(terminal);
        terminalDisplay = this.displayRef.current;
        terminal.emitEvent("help");
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if(state.inputWaiting.isTrue) {
            terminal.emitEvent(`${state.inputWaiting.getEvent()} ${this.state.input}`);
            this.setState({ input: "" });
    
        } else {
            terminal.emitEvent(this.state.input);
            this.setState({ input: "" });
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div 
                className="terminal" 
                onClick={() => this.inputRef.current.focus()} 
                style={this.props.terminalToggled? { display: "block" } : {display: "none"}}
            >
                <div 
                    className="terminal__display"
                    ref={this.displayRef}
                ></div>
                <form 
                    className="terminal__input-container"
                    onSubmit={this.handleSubmit}
                >
                    <label className="terminal__directory">/portfolio:~$
                        <input 
                            className="terminal__input" 
                            id="input" 
                            name="input" 
                            value={this.state.input}
                            type="text" 
                            onChange={this.handleChange}
                            ref={this.inputRef}
                            required 
                        />
                    </label>
                </form>
            </div>
        );
    }
}


export { Terminal , terminalDisplay};