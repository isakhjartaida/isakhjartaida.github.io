import React from 'react';
import { Box, TextField, Button } from '@material-ui/core';

export default function Form(props) {
  const { email, setEmail, setSendStatus } = props;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-end"
    >
      <TextField
        id="email"
        label="email"
        value={email}
        placeholder="Skriv din email här"
        variant="outlined"
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => { setEmail(e.target.value) }}
      />
      <Box margin={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => { setSendStatus('send') }}
        >
          Meddela mig
        </Button>
      </Box>
    </Box>
  );
}
