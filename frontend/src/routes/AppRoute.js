import { Route } from "react-router-dom";

const AppRoute = (props) => {
  const { exact, path, component: Component } = props;

  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => <Component {...props} />}
    />
  );
};

export default AppRoute;
