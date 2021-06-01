import React, { useEffect, useState} from 'react';
import { Box, Typography, Paper } from '@material-ui/core';
import axios from 'axios';

import { Drafts } from '@material-ui/icons';

import Form from './Form';

const FORM_URL = 'https://cors-is-bull.herokuapp.com/https://docs.google.com/forms/d/e/1FAIpQLSfQC24BD9tqflJVnVsth96TFfZkhrFzAxdkMfTVjJ9loFCYow/formResponse';

const postGoogleForm = (email, setSendStatus) => {
  let data = new FormData();
  data.append('emailAddress', email);
  axios.post(FORM_URL, new URLSearchParams(data)).then((res) => {
    setSendStatus('sent');
  }).catch(() => {
    setSendStatus('error');
  });
}

export default function NotifyMe() {
  const [email, setEmail] = useState(undefined);
  const [sendStatus, setSendStatus] = useState(undefined);

  useEffect(() => {
    if (email && email.length > 0 && sendStatus === 'send') {
      postGoogleForm(email, setSendStatus)
    } else if (!email || (email && email.length <= 0)) {
      setSendStatus(undefined);
    }
  }, [email, sendStatus]);

  let EmailComponent = <></>;
  switch(sendStatus) {
    case 'sent':
      EmailComponent = (
        <Typography>
          <span role="img" aria-label="green-check">✅</span> Sådär, vi har noterat din mailadress! Vi hör av oss så fort vi vet något mer <span role="img" aria-label="love-letter">💌</span>
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
            sendStatus={sendStatus}
            setEmail={setEmail}
            setSendStatus={setSendStatus}
          />
        </Box>
      );
      break;
    default:
      EmailComponent = (
        <Form
          email={email}
          sendStatus={sendStatus}
          setEmail={setEmail}
          setSendStatus={setSendStatus}
        />
      );
      break;
  }

  return (
    <Box width="100%">
      <Paper>
        <Box padding={2}>
          <Drafts color="primary" />

          <Box marginBottom={3}>
            <Typography>
              Fyll gärna i din mailadress för att få ett email när det finns ny information <span role="img" aria-label="Tada">🎉</span>
            </Typography>
          </Box>

          { EmailComponent }

        </Box>
      </Paper>
    </Box>
  );
}
