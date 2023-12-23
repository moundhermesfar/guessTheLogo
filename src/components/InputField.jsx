import React from "react";

const InputField = ({ onInputChange, value }) => {
  return (
    <input
      type="text"
      placeholder="Your guess..."
      onChange={onInputChange}
      value={value}
      autoFocus
      className="p-2 border rounded"
    />
  );
};

export default InputField;
