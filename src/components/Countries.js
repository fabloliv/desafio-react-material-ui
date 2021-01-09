import { CircularProgress, CssBaseline } from "@material-ui/core";

import { GET_ALL_COUNTRIES } from "../graphql";

import { useQuery } from "@apollo/client";

import Header from "./Header";
import Footer from "./Footer";
import CountryList from "./CountryList";

const Countries = (props) => {
  const { history } = props;

  // test
  let first = 30;

  const { loading, error, data } = useQuery(GET_ALL_COUNTRIES, {
    variables: { first },
  });

  if (loading) return <CircularProgress />;
  if (error) return `Erro! ${error.message}`;

  return (
    <>
      <CssBaseline />
      <Header title="Graph Countries" />
      <CountryList data={data} history={history} />
      <Footer />
    </>
  );
};

export default Countries;
