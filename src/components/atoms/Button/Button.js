import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ type, text, handleClick }) => {
  return (
    <div className="p-1">
      <button
        className={`text-zinc-600 font-semibold py-2 px-4 rounded-md border-solid border-zinc-600 border-2 hover:text-zinc-900 hover:border-zinc-900`}
        type={type}
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  );
};

Button.defaultProps = {
  type: 'button',
};
Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
};
