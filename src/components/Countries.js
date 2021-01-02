import {
  AppBar,
  Toolbar,
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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  countriesContainer: {
    paddingTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px",
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
        {/*getCountryCard()*/}

        {data.Country.map((country) => (
          <Grid item xs={12} sm={3} key={country._id}>
            <Card
              className={classes.root}
              onClick={() => history.push(`/${country._id}`)}
            >
              <CardActionArea>
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
