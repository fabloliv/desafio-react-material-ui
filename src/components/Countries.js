import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  countriesContainer: {
    paddingTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px",
  },
});

const getCountryCard = () => {
  return (
    <Grid item xs={12} sm={4}>
      <Card>
        <CardContent>Oi xD</CardContent>
      </Card>
    </Grid>
  );
};

const Countries = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar></Toolbar>
      </AppBar>

      <Grid
        container
        spacing={2}
        justify="center"
        className={classes.countriesContainer}
      >
        {getCountryCard()}
        {getCountryCard()}
        {getCountryCard()}
        {getCountryCard()}
      </Grid>
    </>
  );
};

export default Countries;
