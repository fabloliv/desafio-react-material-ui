import {
  AppBar,
  Toolbar,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
  Typography,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { GET_ALL_COUNTRIES } from "../queries";

import { useQuery } from "@apollo/client";

const useStyles = makeStyles({
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
            <Card onClick={() => history.push(`/${country._id}`)}>
              <CardMedia
                classname={classes.cardMedia}
                image={country.flag.svgFile}
                style={{
                  width: "100%",
                  height: "200px",
                }}
              />
              <CardContent className={classes.cardContent}>
                <Typography>{country.nameTranslations[0].value}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Countries;
