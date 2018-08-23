import React from 'react';

export const Action = (props) => (
    <div className="actionDiv">
      <button className="blue-button" disabled={!props.hasOptions}
        onClick={props.handlePick}>What should I do?</button>
      <div className="howToDo" style={{ display: props.choice === true ? '' : 'none' }}>
        <p>The application is designed to make it easier to decide. Add options one by one and press the big blue button.</p>
        <button onClick={props.howToDoClose}><i className="fa fa-times" aria-hidden="true"></i></button>
      </div>
    </div>
  )