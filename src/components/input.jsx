import React, { useState } from "react";

const Input = ({ handleChange }) => {
  const [searchValue, setSearchValue] = useState("");
  const changeValue = (e) => {
    console.log(e.target.value);
    handleChange(e.target.value);
  };
  return (
    <div className="flex flex-col items-center">
      <input
        className="border border-gray-400 mt-6"
        type="text"
        onChange={changeValue}
      />
    </div>
  );
};

export default Input;
