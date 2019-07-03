import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

const DatePickerInput = props => {
  //console.log(props.value);

    return (
      <div className="form-group">
        <label for={props.name}> {props.title}</label>
        <br />
        <DayPickerInput
          className="form-control"
          id={props.name}
          name={props.name}
          value={props.value}
          onDayChange={props.handleChange}
          {...props}
          />
        </div>
  );
};

export default DatePickerInput;
