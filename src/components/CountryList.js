import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 230,
  },
  countriesContainer: {
    padding: "10px 20px",
  },
  cardActionArea: {
    padding: "4px",
  },
  cardMedia: {
    margin: "auto",
  },
  cardContent: {
    padding: "4px 0 0 0",
    position: "relative",
  },
  countryName: {
    fontSize: "0.75rem",
    fontWeight: 700,
    textTransform: "uppercase",
    lineHeight: "140%",
    padding: "0 25px 0 0",
  },
  countryCapital: {
    fontSize: "0.6875rem",
    lineHeight: "1em",
  },
  countryAlpha: {
    position: "absolute",
    right: 0,
    fontSize: "0.6875rem",
    fontWeight: 700,
    letterSpacing: "0.0625rem",
  },
});
const CountryList = (props) => {
  const { data, history } = props;
  const { Country: countries } = data;

  console.log(props);

  const classes = useStyles();

  return (
    <div style={{ padding: 10 }}>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.countriesContainer}
      >
        {countries.map(
          ({
            _id: countryId,
            name,
            capital,
            alpha3Code,
            nameTranslations: [{ value: TranslatedName }],
            flag: { svgFile },
          }) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={countryId}>
              <Card className={classes.root}>
                <CardActionArea
                  className={classes.cardActionArea}
                  onClick={() => history.push(`/${countryId}`)}
                >
                  <CardMedia
                    className={classes.cardMedia}
                    component="img"
                    alt={`${name}'s flag`}
                    height="100"
                    image={svgFile}
                    title={name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="span"
                      className={classes.countryAlpha}
                    >
                      {alpha3Code}
                    </Typography>
                    <Typography
                      className={classes.countryName}
                      variant="h6"
                      component="h3"
                    >
                      {TranslatedName}
                    </Typography>

                    <Typography
                      className={classes.countryCapital}
                      color="textSecondary"
                    >
                      {capital} &nbsp;
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          )
        )}
      </Grid>
    </div>
  );
};

export default CountryList;
