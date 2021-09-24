import React, { Component } from "react";
import Button from "./components/Button";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      inputText: "",
    };
    this.inputRef = React.createRef();
    console.log("constructor");
  }

  inputHandler = (e) => {
    this.setState({
      inputText: e.target.value,
    });
  };

  inputFocusHandler = () => {
    this.inputRef.current.focus();
  };

  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmout");
  }

  render() {
    console.log("render");
    const isButtonDisable = this.state.inputText === "реакт";

    return (
      <form>
        <input
          ref={this.inputRef}
          type="text"
          value={this.state.inputText}
          onChange={this.inputHandler}
        />
        <button type="button" onClick={this.inputFocusHandler}>
          Input Focus
        </button>
        <button type="submit" disabled={isButtonDisable}>
          Submit
        </button>
        <Button text={"One more button"} />
      </form>
    );
  }
}

export default App;
