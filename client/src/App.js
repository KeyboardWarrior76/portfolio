import React from 'react';
import { MainScreen } from "./components/MainScreen";
import { Navbar } from './components/Navbar';
import { BottomBar } from "./components/BottomBar";

class App extends React.Component {
  state = {
    selected: "about"
  };

  setSelected = (selected) => {
    this.setState({ selected });
  }

  render() {
    const { selected } = this.state;

    return (
      <div className="App">
        <Navbar 
          selected={selected} 
          setSelected={this.setSelected}
        />
        <MainScreen  selected={selected} />
        <BottomBar 
          selected={selected}
        />
      </div>
    );
  };
}

export default App;
