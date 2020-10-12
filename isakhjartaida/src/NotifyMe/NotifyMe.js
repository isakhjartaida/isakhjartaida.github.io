import React, { useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Paper } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import axios from 'axios';

import Form from './Form';

const FORM_URL = 'https://cors-anywhere.herokuapp.com/https://docs.google.com/forms/d/e/1FAIpQLSfQC24BD9tqflJVnVsth96TFfZkhrFzAxdkMfTVjJ9loFCYow/formResponse';

const postGoogleForm = (email, setSendStatus) => {
  let data = new FormData();
  data.append('emailAddress', email);
  axios.post(FORM_URL, new URLSearchParams(data)).then((res) => {
    setSendStatus('sent');
  }).catch(() => {
    setSendStatus('error');
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
  const [sendStatus, setSendStatus] = useState(undefined);

  useEffect(() => {
    if (email && email.length > 0 && sendStatus === 'send') {
      postGoogleForm(email, setSendStatus)
    }
  }, [email, sendStatus]);

  let EmailComponent = <></>;
  switch(sendStatus) {
    case 'send':
      EmailComponent = (
        <Box>
          <Skeleton />
        </Box>
      );
      break;
    case 'sent':
      EmailComponent = (
        <Typography>
          ✅ Sådär, vi har noterat din mailadress! Vi hör av oss så fort vi vet något mer <span role="img" aria-label="love-letter">💌</span>
        </Typography>
      );
      break;
    case 'error':
      EmailComponent = (
        <Box>
          <Box marginBottom={2}>
            <Typography>
              Åh nej, något gick fel <span role="img" aria-label="scream">😱</span> Skrev du rätt?
            </Typography>
          </Box>
          <Form
            email={email}
            setEmail={setEmail}
            setSendStatus={setSendStatus}
          />
        </Box>
      );
      break;
    default:
      EmailComponent = (
        <Form
          setEmail={setEmail}
          setSendStatus={setSendStatus}
        />
      );
      break;
  }

  return (
    <Box width="100%">
      <Paper className={classes.NotifyMe}>
        <Box marginBottom={3}>
          <Typography>
            Fyll gärna i din mailadress för att få ett email när det finns ny information, tex. när OSA öppnar <span role="img" aria-label="Tada">🎉</span>
          </Typography>
        </Box>

        { EmailComponent }
      </Paper>
    </Box>
  );
}
