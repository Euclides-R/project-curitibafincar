import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

export default function Button({ 
  children,
  kind,
  className,
  url
}) {
  if (url) {
    return (
      <Link 
        className={classnames(`btn btn-${kind}`, className)}
        to={url} 
      >
        {children}
      </Link>
    )
  }

  return (
    <button className={classnames(`btn btn-${kind}`, className)}>
      {children} 
    </button>
  );
}

Button.propTypes = {
  kind: PropTypes.string
};

Button.defaultProps = {
  kind: 'primary',
};
