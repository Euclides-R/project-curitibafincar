import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

export default function Select({ children, kind, className, ...rest }) {
  return (
    <select className={classnames(`select select-${kind}`, className)} {...rest}>
      {children}
    </select>
  );
}

Select.propTypes = {
  kind: PropTypes.string,
};

Select.defaultProps = {
  kind: "primary",
};
