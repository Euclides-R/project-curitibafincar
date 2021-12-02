import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

export default function Button({
  children,
  kind,
  className,
  url,
  type
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
    <button className={classnames(`btn btn-${kind}`, className)} type={type}>
      {children}
    </button>
  );
}

Button.propTypes = {
  kind: PropTypes.string,
  type: PropTypes.string
};

Button.defaultProps = {
  kind: 'primary',
  type: 'button'
};
