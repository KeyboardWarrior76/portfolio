import React from 'react';
import { MainScreen } from "./components/MainScreen";
import { Navbar } from './components/Navbar';
import { BottomBar } from "./components/BottomBar";
import { detect } from "detect-browser";

class App extends React.Component {
  state = {
    selected: "about",
    terminalToggled: false,
    screenloaded: false,
  };

  browser = detect();

  componentDidMount() {
    console.log(JSON.stringify(this.browser.name));
  }

  componentDidUpdate(prevProps, prevState) {
    if( this.state.selected !== prevState.selected ) {
      this.setState({ screenloaded: false });
    }
  }

  setSelected = (selected) => {
    this.setState({ selected });
  }

  toggleTerminal = () => {
    this.setState({ terminalToggled: !this.state.terminalToggled });
  }

  setTerminalFalse = () => {
    this.setState({ terminalToggled: false });
  }

  toggleScreenLoaded = () => {
    this.setState({ screenloaded: !this.state.screenloaded });
  }

  toggleLoadCancel = () => {
    this.setState({ loadCancelations: !this.state.loadCancelations });
  }

  render() {
    const { selected, terminalToggled, screenloaded } = this.state;

    if(this.browser.name === "ie") return (
        <div className="ie-not-supported">
          <h2>I'm sorry, but Internet Explorer is not yet supported.</h2>
          <h2>It is recommended that this browser only be used for compatibility purposes with legacy applications.</h2>
          <img 
              src={require("./images/atom.svg")} 
              alt="atom" 
              className="about-me__atom rotate"
          />
        </div>
    ); else return (
      <div className="App">
        <Navbar 
          selected={selected} 
          setSelected={this.setSelected}
          screenloaded={screenloaded} 
        />
        <MainScreen  
          selected={selected} 
          terminalToggled={terminalToggled}
          loaded={screenloaded}
          toggleScreenLoaded={this.toggleScreenLoaded}
        />
        <BottomBar 
          selected={selected}
          toggleTerminal={this.toggleTerminal}
          terminalToggled={terminalToggled}
        />
      </div>
    );
  };
}

export default App;
