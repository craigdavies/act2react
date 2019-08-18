import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import {formatDate,parseDate,} from 'react-day-picker/moment';
import 'react-day-picker/lib/style.css';

const DatePickerInput = props => {
  //console.log(props.value);
    return (

      <div className="form-group">
        <label htmlFor={props.name}> {props.title}</label>
        <br />
        <DayPickerInput
          className="form-control"
          id={props.name}
          name={props.name}
          value={props.value}
          selected={props.value}
          format="M/D/YYYY"
          onDayChange={props.handleChange}
          {...props}
          />
        </div>
  );
};

export default DatePickerInput;
