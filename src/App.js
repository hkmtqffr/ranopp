import React, { Component } from 'react';
import { Header } from './component/Header';
import { Action } from './component/Action';
import { Options } from './component/Options';
import { RemoveAll } from './component/removeAll';
import OptionModal from './component/OptionModal';
import AddOption from './component/AddOption';

import '../node_modules/font-awesome/css/font-awesome.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.howToDoClose = this.howToDoClose.bind(this);
    this.state = {
      options: [],
      selectedOption: undefined,
      choice: true
    }
  }




  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item ';


    } else if (this.state.options.indexOf(option) > -1) {
      return 'this option already exists';
    } else {
      this.setState((prevState) => ({
        options: prevState.options.concat(option),
      }));
      document.getElementById('textbox').value = null;  // clear textbox after submit-act.
    }
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option
    }));
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }

  onHandleClose = () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  }


  howToDoClose() {
    this.setState(() => ({ choice: false }));
  }

  render() {
    const title = "RanOpp";
    return (
      <div>
        <Header title={title} />
        <div className="container">
          <div className="optionWrapper">
            <Action options={this.state.options} howToDoClose={this.howToDoClose} choice={this.state.choice}
              handlePick={this.handlePick} hasOptions={this.state.options.length > 0} />
            <Options options={this.state.options}
              handleDeleteOption={this.handleDeleteOption} optionz={this.state.options} />
            <AddOption handleAddOption={this.handleAddOption} />
            <OptionModal onHandleClose={this.onHandleClose}
              selectedOption={this.state.selectedOption} />
            <RemoveAll options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} />
          </div>
        </div>
      </div>

    );
  }
}

export default App;
