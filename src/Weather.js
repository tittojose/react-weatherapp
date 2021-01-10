import React from "react"
import Typography from '@material-ui/core/Typography';
import { Container } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

function Weather({ data }) {

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },

    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 250,
    },
  }));

  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const celsius = (data.main.temp - 273.15).toFixed(1);
  const fellsLike = (data.main.feels_like - 273.15).toFixed(1);
  return (
    <div>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}
              justify="center"
              alignItems="center">
              <Paper className={fixedHeightPaper} elevation={3} >
                <Typography variant="h5" gutterBottom style={{ textAlign: "center" }} >
                  {data.name + ", " + data.sys.country}
                </Typography>
                <Typography variant="h3" gutterBottom style={{ textAlign: "center", fontWeight: "bold" }}>
                  {celsius}<sup>&#8451;</sup>
                </Typography>
                <Typography variant="h5" gutterBottom style={{ textAlign: "center" }} >
                  Feels like {fellsLike}<sup>&#8451;</sup>
                </Typography>
                <Typography variant="h6" gutterBottom style={{ textAlign: "center" }}>
                  {data.weather[0].main}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div >
  );
}

export default Weather;
