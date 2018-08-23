import React from 'react';

export const Header = (props) => (
    <div className="header">
      <div className="container">
        <div className="title">
          <h2>{props.title}</h2>
        </div>
      </div>
    </div>
  );