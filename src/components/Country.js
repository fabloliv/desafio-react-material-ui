const Country = (props) => {
  const { match } = props;
  const { params } = match;
  const { countryId } = params;

  return <div>{`Página do país #${countryId}`}</div>;
};

export default Country;
