import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
  Typography,
  CardActionArea,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { GET_ALL_COUNTRIES } from "../queries";

import { useQuery } from "@apollo/client";
import Header from "./Header";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  countriesContainer: {
    paddingTop: "20px",
    paddingLeft: "40px",
    paddingRight: "40px",
  },
  cardMedia: {
    margin: "auto",
  },
  cardContent: {
    textAlign: "center",
  },
  capital: {
    fontSize: 14,
  },
});

const Countries = (props) => {
  const { history } = props;

  // test
  let first = 15;

  const classes = useStyles();

  const { loading, error, data } = useQuery(GET_ALL_COUNTRIES, {
    variables: { first },
  });

  if (loading) return <CircularProgress />;
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <Header title="Países" />

      {/* gera lista de países */}
      {/* <ListCountries data={data} /> */}

      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.countriesContainer}
      >
        {data.Country.map((country) => (
          <Grid item xs={12} sm={6} md={3} key={country._id}>
            <Card className={classes.root}>
              <CardActionArea onClick={() => history.push(`/${country._id}`)}>
                <CardMedia
                  className={classes.cardMedia}
                  component="img"
                  alt={`Bandeira de ${country.nameTranslations[0].value}`}
                  height="140"
                  image={country.flag.svgFile}
                  title={country.name}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom={false} variant="h6" component="h2">
                    {country.nameTranslations[0].value}
                  </Typography>

                  <Typography className={classes.capital} color="textSecondary">
                    {country.capital}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Countries;
