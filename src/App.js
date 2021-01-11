import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AppRoute from "./routes/AppRoute";
import routes from "./routes";
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <AppRoute
              exact={route.exact}
              key={index}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </Router>
    </>
  );
};

export default App;
