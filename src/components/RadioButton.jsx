import React from "react";

const RadioButton = props => {
  //Need to work out why this styling isnt working for the radio button spacing
  // const radioButtonSpacing = {float : 'right'}
  return (
    <div className="form-group">
      <label htmlFor={props.name} className="form-label">
        {props.title}
      </label>
      <div className="radiobutton">
        {props.options.map(option => {
          return (
            <label key={option} className="radiobutton-inline">
              <input
                id={props.name}
                name={props.name}
                onChange={props.handleChange}
                value={option}
                checked={props.selectedOptions.indexOf(option) > -1}
                type="radio"
                // style={radioButtonSpacing}
              />
              {option}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default RadioButton;


