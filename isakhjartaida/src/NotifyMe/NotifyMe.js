import React, { useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, TextField, Button, Typography, Paper } from '@material-ui/core';
import axios from 'axios';

const FORM_URL = 'https://cors-anywhere.herokuapp.com/https://docs.google.com/forms/d/e/1FAIpQLSfQC24BD9tqflJVnVsth96TFfZkhrFzAxdkMfTVjJ9loFCYow/formResponse';

const postGoogleForm = (email, setSend) => {
  let data = new FormData();
  data.append('emailAddress', email);
  axios.post(FORM_URL, new URLSearchParams(data)).then((res) => {
    setSend('sent');
  });
}

const useStyles = makeStyles((theme) => ({
  NotifyMe: {
    padding: theme.spacing(2),
  },
}));

export default function NotifyMe() {
  const classes = useStyles();

  const [email, setEmail] = useState(undefined);
  const [send, setSend] = useState(undefined);

  useEffect(() => {
    if (email && email.length > 0 && send === 'send') {
      postGoogleForm(email, setSend)
    }
  }, [email, send]);

  return (
    <Box width="100%">
      <Paper className={classes.NotifyMe}>
        <Box marginBottom={3}>
          <Typography>
            Fyll i din email-address för att få ett email när det finns ny information, tex. när OSA öppnar <span role="img" aria-label="Tada">🎉</span>
          </Typography>
        </Box>
        { send === 'sent' ?
          <Typography>Tack!</Typography>
        :
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
          >
            <TextField
              id="email"
              label="e-mail"
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
                onClick={() => { setSend('send') }}
              >
                Meddela mig
              </Button>
            </Box>
          </Box>
        }
      </Paper>
    </Box>
  );
}
