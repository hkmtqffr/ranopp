import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Option } from './Option';

export const Options = (props) => (
    <div>
      <ReactCSSTransitionGroup component="div"
        transitionName="fade"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={200}
        transitionAppear={true}
        transitionAppearTimeout={300}
      >
        {
          props.optionz.map(
            (option, index) => <Option anime={props.anime}
              optionz={props.optionz} key={option} optionText={option} count={index + 1}
              handleDeleteOption={props.handleDeleteOption} />
          )
        }
      </ReactCSSTransitionGroup>
    </div>
  
  );