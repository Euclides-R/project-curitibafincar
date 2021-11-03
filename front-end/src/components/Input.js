import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Input({ 
  type,
  placeHolder,
  onChange,
  kind,
  className,
  ...rest
}) {
    return (
        <input 
          className={classnames(`input input-${kind} radius-form`, className)}
          type={type}
          placeholder={placeHolder}
          onChange={onChange}
          {...rest}
        />
    )  
}

Input.propTypes = {
  type: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
}
