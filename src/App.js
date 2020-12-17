import React from "react";
import { Route, Switch } from "react-router-dom";

import Countries from "./components/Countries";
import Country from "./components/Country";

function App() {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <Countries {...props} />} />
      <Route
        exact
        path="/:countryId"
        render={(props) => <Country {...props} />}
      />
    </Switch>
  );
}

export default App;
