import {
  Button,
  CircularProgress,
  CssBaseline,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { GET_COUNTRY } from "../graphql";
import { useQuery } from "@apollo/client";

import Header from "./Header";

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
  },
});

/*

MOCK DATA
= = = = = = = 
  data: {
    Country: [
      {
        _id: "3",
        name: "Afghanistan",
        capital: "Kabul",
        nameTranslations: [{ value: "Afeganistão" }],
        flag: { svgFile: "https://restcountries.eu/data/afg.svg" },
      },
  */

const Country = (props) => {
  const { history, match } = props;
  const { params } = match;
  const { countryId } = params;

  const classes = useStyles();

  const { loading, error, data } = useQuery(GET_COUNTRY, {
    variables: { countryId },
    skip: countryId === undefined,
  });

  if (loading) return <CircularProgress />;
  if (error) return `Error! ${error.message}`;

  const { name, capital, area, population } = data.Country[0];
  const topLevelDomain = data.Country[0].topLevelDomains[0].name;
  const translatedName = data.Country[0].nameTranslations[0].value;

  return (
    <>
      <CssBaseline />
      <Header title={`País: ${countryId}`} />

      {/* gera pagina sobre país */}
      {/*  (bandeira, nome, capital, área, população e top-level domain); */}

      <Grid>
        <Paper>
          <Typography className={classes.root} variant="h1">
            {`#${countryId} ${name}`}
          </Typography>

          <Typography variant="subtitle1">TLD: {topLevelDomain}</Typography>
          <Typography variant="subtitle2">{translatedName}</Typography>

          <p>País: {name}</p>
          <p>Capital: {capital ? capital : " "}</p>
          <p>Área: {area} km²</p>
          <p>População: {population / 1000}</p>
        </Paper>
      </Grid>

      <Button variant="contained" onClick={() => history.push("/")}>
        Voltar
      </Button>
    </>
  );
};

export default Country;
