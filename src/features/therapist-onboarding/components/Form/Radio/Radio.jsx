import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormLabel, RadioGroup as MuiRadioGroup, FormControlLabel, Radio, FormHelperText } from '@mui/material';

const RadioGroup = ({
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
      <MuiRadioGroup
        aria-label={label}
        name={id}
        {...props}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.text}
          />
        ))}
      </MuiRadioGroup>
      {(helperText || error) && (
        <FormHelperText>{error || helperText}</FormHelperText>
      )}
    </FormControl>
  );
};

RadioGroup.propTypes = {
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

export default RadioGroup; 