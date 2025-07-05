import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormLabel, FormHelperText, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const FileInput = ({
  id,
  label,
  accept,
  required,
  helperText,
  error,
  className = '',
  ...props
}) => {
  return (
    <FormControl fullWidth margin="normal" error={!!error} className={className}>
      <FormLabel component="legend" required={required}>
        {label}
      </FormLabel>
      <Button
        component="label"
        variant="outlined"
        fullWidth
      >
        Choose File
        <VisuallyHiddenInput
          type="file"
          id={id}
          accept={accept}
          required={required}
          {...props}
        />
      </Button>
      {(helperText || error) && (
        <FormHelperText>
          {error || helperText}
          {accept && <span style={{ display: 'block', marginTop: '4px' }}>
            Accepted formats: {accept}
          </span>}
        </FormHelperText>
      )}
    </FormControl>
  );
};

FileInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  accept: PropTypes.string,
  required: PropTypes.bool,
  helperText: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
};

export default FileInput; 