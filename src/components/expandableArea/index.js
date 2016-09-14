import React from 'react';
import classNames from 'classnames';

function ExpandableArea({
  children,
  className,
  type = 'button',
  ...props,
}) {
  const buttonClasses = classNames('btn', 'btn-primary', className);

  return (
    <button
      type={ type }
      className={ buttonClasses }
      onClick={ onClick }
      {...props}>
      { children }
    </button>
  );
}

Button.propTypes = {
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string,
  type: React.PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: React.PropTypes.func,
};

export default Button;
