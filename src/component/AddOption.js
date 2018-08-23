import React from 'react';

export default class AddOption extends React.Component {
    constructor(props) {
      super(props);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
        error: undefined
      }
    }
    handleAddOption(e) {
      e.preventDefault();
      const option = e.target.elements.option.value.trim();
      const error = this.props.handleAddOption(option);
  
      this.setState(() => ({ error }));
    }
  
    render() {
      return (
        <div>
  
          {this.state.error && <p className="errorMessage">{this.state.error}</p>}
  
          <form className="inputform" onSubmit={this.handleAddOption}>
            <input className="textbox" id="textbox" type="text" name="option" placeholder="&#9998;..." />
            <button className="add-button">Add Option</button>
          </form>
        </div>
      );
    }
  }