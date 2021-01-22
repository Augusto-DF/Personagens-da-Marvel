import React from 'react';

const Input = (props) => {
  return (
    <>
      <label name={props.input}>{props.label}</label>
      <input
        htmlFor={props.input}
        placeholder={props.placeholder}
        type="text"
        onChange={props.onChange}
      />
    </>
  );
};

export default Input;
