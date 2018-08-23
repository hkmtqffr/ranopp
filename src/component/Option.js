import React from 'react';

export const Option = (props) => (
    <div className="option" id={props.optionText}>
      {props.optionText && <p>{props.count}. &nbsp; {props.optionText}</p>}
      <button title="remove option" onClick={(e) => { props.handleDeleteOption(props.optionText) }}>
        <i className="fa fa-trash" aria-hidden="true"></i></button>
    </div>
  )