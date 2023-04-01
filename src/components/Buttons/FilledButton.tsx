import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import useStyles from './style';

const FilledButton = ({ className, label, icon, size, iconPosition, handleClick, color, disabled, outline }) => {
  const classes = useStyles();

  return (
    <Button
      className={clsx(classes.root, className, classes[color], disabled ? classes.disabled : '', outline ? classes.outline : '')}
      variant="contained"
      size={size}
      onClick={handleClick}
      type="submit"
    >
      {iconPosition === 'start' && Boolean(icon) && (
        <span className={clsx(classes.icon, classes.iconStart)}>{icon}</span>
      )}
      {label}
      {iconPosition === 'end' && Boolean(icon) && <span className={clsx(classes.icon, classes.iconEnd)}>{icon}</span>}
    </Button>
  );
};

FilledButton.propTypes = {
  className: PropTypes.string,
  label: PropTypes.any.isRequired,
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  iconPosition: PropTypes.oneOf(['start', 'end']),
  handleClick: PropTypes.func,
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'grey', 'grey_outline']),
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
};

FilledButton.defaultProps = {
  className: '',
  icon: '',
  size: 'medium',
  handleClick: () => {},
  color: 'primary',
  disabled: false,
  outline: false,
};

export default FilledButton;
