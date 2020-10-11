import React, { useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import axios from 'axios';

const FORM_UL = 'https://cors-anywhere.herokuapp.com/https://docs.google.com/forms/d/e/1FAIpQLSfQC24BD9tqflJVnVsth96TFfZkhrFzAxdkMfTVjJ9loFCYow/formResponse';

const postGoogleForm = (email, setSend) => {
  let data = new FormData();
  data.append('emailAddress', email);
  axios.post(FORM_UL, new URLSearchParams(data)).then((res) => {
    console.log(res);
    setSend('sent');
  });
}

const useStyles = makeStyles((theme) => ({
  NotifyMe: {
    background: theme.palette.background.paper,
    padding: theme.spacing(2),
  },
}));

export default function NotifyMe() {
  const classes = useStyles();

  const [email, setEmail] = useState(undefined);
  const [send, setSend] = useState(undefined);

  useEffect(() => {
    console.log(send);
    if (email && email.length > 0 && send === 'send') {
      console.log(email);
      postGoogleForm(email, setSend)
    }
  }, [email, send]);

  return (
    <Box
      width="100%"
      className={classes.NotifyMe}
    >
      <Box marginBottom={3}>
        <Typography>
          Vill du få ett email när det finns ny information och när OSA öppnar?
          Fyll i din email-adress och klicka på "Meddela mig"!
        </Typography>
      </Box>
      { send === 'sent' ?
        <Typography>Tack!</Typography>
      :
        <Box display="flex" flexDirection="column" alignItems="center">
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
    </Box>
  );
}
