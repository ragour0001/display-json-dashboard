import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox as MuiCheckbox, FormHelperText } from '@mui/material';

const Checkbox = ({
  id,
  label,
  options,
  required,
  helperText,
  error,
  className = '',
  ...props
}) => {
  return (
    <FormControl component="fieldset" margin="normal" error={!!error} className={className}>
      <FormLabel component="legend" required={required}>
        {label}
      </FormLabel>
      <FormGroup>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            control={
              <MuiCheckbox
                name={id}
                value={option.value}
                {...props}
              />
            }
            label={option.text}
          />
        ))}
      </FormGroup>
      {(helperText || error) && (
        <FormHelperText>{error || helperText}</FormHelperText>
      )}
    </FormControl>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  required: PropTypes.bool,
  helperText: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
};

export default Checkbox; 