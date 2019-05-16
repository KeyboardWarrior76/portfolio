import React from 'react';
import { MainScreen } from "./components/MainScreen";
import { Navbar } from './components/Navbar';
import { BottomBar } from "./components/BottomBar";

class App extends React.Component {
  state = {
    selected: "about",
    terminalToggled: false,
    screenloaded: false,
  };

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
    const { selected, terminalToggled, screenloaded, loadCancelations } = this.state;

    return (
      <div className="App">
        <Navbar 
          selected={selected} 
          setSelected={this.setSelected}
          screenloaded={screenloaded} 
          setTerminalFalse={this.setTerminalFalse}
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
        />
      </div>
    );
  };
}

export default App;
