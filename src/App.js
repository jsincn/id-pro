import React from 'react';
import './App.css';
import RequestForm from './components/RequestForm.js';
import InfoPanel from './components/InfoPanel.js';
import Footer from './components/Footer.js'
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>ID-PRO für "Flow Studie"</h1>
        </Grid>
        <Grid item md={4}>
          <Paper className={classes.paper}><RequestForm></RequestForm></Paper>
        </Grid>
        <Grid item md={8}>
          <InfoPanel></InfoPanel>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}><Footer></Footer></Paper>
        </Grid>
      </Grid>
      
    </div>
  );
}

export default App;
