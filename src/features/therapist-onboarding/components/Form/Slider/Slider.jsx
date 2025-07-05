import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormLabel, Slider as MuiSlider, FormHelperText } from '@mui/material';

const Slider = ({
  id,
  label,
  min = 0,
  max = 100,
  step = 1,
  defaultValue,
  marks = false,
  required,
  helperText,
  error,
  className = '',
  ...props
}) => {
  const sliderMarks = marks ? Array.from({ length: (max - min) / step + 1 }, (_, i) => ({
    value: min + i * step,
    label: min + i * step,
  })) : false;

  return (
    <FormControl fullWidth margin="normal" error={!!error} className={className}>
      <FormLabel component="legend" required={required}>
        {label}
      </FormLabel>
      <MuiSlider
        id={id}
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue}
        marks={sliderMarks}
        valueLabelDisplay="auto"
        {...props}
      />
      {(helperText || error) && (
        <FormHelperText>{error || helperText}</FormHelperText>
      )}
    </FormControl>
  );
};

Slider.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  defaultValue: PropTypes.number,
  marks: PropTypes.bool,
  required: PropTypes.bool,
  helperText: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
};

export default Slider; 