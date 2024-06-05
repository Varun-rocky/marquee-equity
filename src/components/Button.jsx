import React from "react";

const Button = ({ buttonLabel, clickHandler, classes, disabled }) => {
  return (
    <div className="flex justify-end mt-2">
      <button
        className={`${classes}`}
        onClick={clickHandler}
        disabled={disabled}
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export default Button;
