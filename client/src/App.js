import React from 'react';
import { MainScreen } from "./components/MainScreen";
import { Navbar } from './components/Navbar';
import { BottomBar } from "./components/BottomBar";

class App extends React.Component {
  state = {
    selected: "about",
    terminalToggled: false,
  };

  setSelected = (selected) => {
    this.setState({ selected });
  }

  toggleTerminal = () => {
    this.setState({ terminalToggled: !this.state.terminalToggled });
  }

  render() {
    const { selected, terminalToggled } = this.state;

    return (
      <div className="App">
        <Navbar 
          selected={selected} 
          setSelected={this.setSelected}
        />
        <MainScreen  
          selected={selected} 
          terminalToggled={terminalToggled}
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
