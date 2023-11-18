import React from 'react';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';

const InputComponent = ({ label, id, variant, value, error, errorMessage, onChange }) => {
  return (
    <div>
      <TextField
        id={id}
        label={label}
        variant={variant}
        value={value}
        onChange={onChange}
        style={{
          backgroundColor: '#fff',
          width: '20%',
        }}
        error={error}
        helperText={error && <Alert severity="error">{errorMessage}</Alert>}
      />
    </div>
  );
};

export default InputComponent;
