import React from 'react';

export const RemoveAll = (props) => (
    <div>
      <p className="message"
        style={{ visibility: !props.options.length > 0 ? 'visible' : 'hidden' }}
      >Please add an option to get started!</p>
      <button className={props.options.length > 0 ? 'button-remove show' : 'button-remove hide'}
        onClick={props.handleDeleteOptions} title="remove all"
      >
        <i className="fa fa-times-circle" aria-hidden="true"></i></button>
    </div>
  );
