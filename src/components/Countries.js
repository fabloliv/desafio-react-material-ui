import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Card,
  //CardMedia,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { useQuery, gql } from "@apollo/client";

const ALL_COUNTRIES = gql`
  query AllCountries {
    Country(first: 5) {
      name
      _id
      capital
      nameTranslations(filter: { languageCode: "br" }) {
        value
      }
      flag {
        svgFile
      }
    }
  }
`;

const useStyles = makeStyles({
  countriesContainer: {
    paddingTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px",
  },
});

const getCountryCard = () => {
  return (
    <Grid item xs={12} sm={3}>
      <Card>
        <CardContent>Oi xD</CardContent>
      </Card>
    </Grid>
  );
};

const Countries = () => {
  const classes = useStyles();

  const { loading, error, data } = useQuery(ALL_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Erro!...</p>;

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
        {data.Country.map((country) => (
          <p key={country._id}>{country.nameTranslations[0].value}</p>
        ))}
      </Grid>
    </>
  );
};

export default Countries;
