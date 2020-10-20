import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Drawer } from '@material-ui/core';
import { List, ListSubheader, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import { AndroidOutlined, Apple, EventOutlined, EventAvailableOutlined } from '@material-ui/icons';

import { ReactComponent as Flowers } from 'assets/krans.svg';

const downloadICal = (data) => {
  let link = document.createElement('a');
  link.href = `data:text/calendar;charset=utf-8,${encodeURIComponent(data)}`;
  link.download = "isakhjartaida";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const googleCal = (glink) => {
  let link = document.createElement('a');
  link.href = glink;
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.secondary.light,
  },
  icon: {
    color: theme.palette.primary.main,
  },
  button: {
    color: theme.palette.primary.dark,
    background: theme.palette.common.white,
  },
}));

export default function AddToCalendar() {
  const classes = useStyles();
  const [state, setState] = useState(false);

  const title = "Isak ❤️ Ida";
  const desc = "Save the date for the BEST DAY EVER!";
  const start = "20210716T220000Z";
  const end = "20210717T215959Z";
  const location = "Ängsholns folkpark, Ängsholsvägen 24, 785 30 Gagnef";

  const googleBase = `https://calendar.google.com/calendar/render?action=TEMPLATE`;
  const googleLink = `${googleBase}&dates=${start}/${end}&location=${location}&text=${title}&details=${desc}`;

  const iCalData = `BEGIN:VCALENDAR\r\nPRODID://ISAKHJARTAIDA.SE//\r\nVERSION:2.0\r\nBEGIN:VEVENT\r\nUID:${start}-isakhjartaida.se\r\nURI:https://isakhjartaida.se\r\nMETHOD:PUBLISH\r\nDTSTAMP:${start}\r\nDTSTART:${start}\r\nDTEND:${end}\r\nSUMMARY:${title}\r\nDESCRIPTION:${desc}\r\nLOCATION:${location}\r\nEND:VEVENT\r\nEND:VCALENDAR`;

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginTop={4}
      marginBottom={4}
    >
      <Box
        position="relative"
      >
        <Flowers
          height={300}
          width={400}
        />

        <Box
          position="absolute"
          bottom="80px"
          left={0}
          width={400}
          display="flex"
          justifyContent="center"
        >
          <Button
            variant="contained"
            onClick={()=>{setState(true)}}
            startIcon={<EventAvailableOutlined />}
            size="large"
            className={classes.button}
          >
            Save the date
          </Button>
        </Box>
      </Box>

      <Drawer
        anchor={'bottom'}
        open={state}
        onClose={()=>{setState(false)}}
      >
        <List
          className={classes.root}
          subheader={
            <ListSubheader component="div" id="subheader">
              Välj kalender
            </ListSubheader>
          }
        >

          <ListItem button key={'apple'} onClick={() => {downloadICal(iCalData)}}>
            <ListItemIcon className={classes.icon}><Apple /></ListItemIcon>
            <ListItemText>Apple</ListItemText>
          </ListItem>

          <ListItem button key={'google'} onClick={() => {googleCal(googleLink)}}>
            <ListItemIcon className={classes.icon}><AndroidOutlined /></ListItemIcon>
            <ListItemText>Google</ListItemText>
          </ListItem>

          <ListItem button key={'outlook'} onClick={() => {downloadICal(iCalData)}}>
            <ListItemIcon className={classes.icon}><EventOutlined /></ListItemIcon>
            <ListItemText>Outlook</ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
