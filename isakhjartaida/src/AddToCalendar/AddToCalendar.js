import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Drawer } from '@material-ui/core';
import { List, ListSubheader, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import { AndroidOutlined, Apple, EventAvailableOutlined } from '@material-ui/icons';

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
}));

export default function AddToCalendar() {
  const classes = useStyles();
  const [state, setState] = useState(false);

  const title = "Isak ❤️ Ida";
  const desc = "BEST DAY EVER!";
  const start = "20210717T133000Z";
  const end = "20210718T050000Z";
  const location = "Ängsholns folkpark, Ängsholsvägen 24, 785 30 Gagnef";

  const googleBase = `https://calendar.google.com/calendar/render?action=TEMPLATE`;
  const googleLink = `${googleBase}&dates=${start}/${end}&location=${location}&text=${title}&details=${desc}`;

  const iCalData = `BEGIN:VCALENDAR\r\nPRODID://ISAKHJARTAIDA.SE//\r\nVERSION:2.0\r\nBEGIN:VEVENT\r\nUID:${start}-isakhjartaida.se\r\nURI:https://isakhjartaida.se\r\nMETHOD:PUBLISH\r\nDTSTAMP:${start}\r\nDTSTART:${start}\r\nDTEND:${end}\r\nSUMMARY:${title}\r\nDESCRIPTION:${desc}\r\nLOCATION:${location}\r\nEND:VEVENT\r\nEND:VCALENDAR`;

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginTop={10}
      marginBottom={10}
    >
      <Button
        variant="contained"
        onClick={()=>{setState(true)}}
        startIcon={<EventAvailableOutlined />}
        size="large"
        className={classes.button}
        color="primary"
      >
        Lägg till i kalender
      </Button>

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

        </List>
      </Drawer>
    </Box>
  );
}
