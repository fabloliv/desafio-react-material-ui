import { Button, CircularProgress, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { GET_COUNTRY } from "../queries";
import { useQuery } from "@apollo/client";

import Header from "./Header";

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
  },
});

const Country = (props) => {
  const { history, match } = props;
  const { params } = match;
  const { countryId } = params;

  const classes = useStyles();

  const { loading, error, data } = useQuery(GET_COUNTRY, {
    variables: { countryId },
  });

  if (loading) return <CircularProgress />;
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <Header title={`País: ${countryId}`} />

      {/* gera pagina sobre país */}
      {/* <CountryPage data={data} /> */}

      {data.Country.map((country) => (
        <Typography key={country._id} className={classes.root} variant="h1">
          {`#${countryId} ${country.nameTranslations[0].value}`}
        </Typography>
      ))}
      <Button variant="contained" onClick={() => history.push("/")}>
        Voltar
      </Button>
    </>
  );
};

export default Country;
