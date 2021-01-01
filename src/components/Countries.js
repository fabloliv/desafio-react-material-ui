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

import { useQuery, gql } from "@apollo/client";

const ALL_COUNTRIES = gql`
  query AllCountries {
    Country(first: 10) {
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
  cardMedia: {
    margin: "auto",
  },
  cardContent: {
    textAlign: "center",
  },
});

const Countries = (props) => {
  const { history } = props;

  const classes = useStyles();

  const { loading, error, data } = useQuery(ALL_COUNTRIES);

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
