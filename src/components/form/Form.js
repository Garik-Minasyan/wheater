import React from "react";

const Form = ({ onChange, onSubmit, city }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={onChange}
        type="text"
        placeholder="Search City"
        value={city}
        autoComplete="off"
      />
      <button>Search</button>
    </form>
  );
};

export default Form;
