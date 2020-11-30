import React, { Suspense, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "./layout/Layout";
import LoaderSpiner from "./loader/Loader";
import { routes } from "../routes/routes";
import { Switch, useHistory } from "react-router-dom";
import { getCurrentUserOperation } from "../redux/operations/authOperations";
import PrivateRoute from "./privateRoute/PrivateRoute";
import PublicRoute from "./publicRoute/PublicRoute";
import { navigation } from "../routes/constans";

const App = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const persistedToken = useSelector((state) => state.userAuth.token);

  useEffect(() => {
    if (!persistedToken) {
      history.push(navigation.registration);
      return;
    }
    dispatch(getCurrentUserOperation(persistedToken));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <Suspense fallback={<LoaderSpiner />}>
        <Switch>
          {routes.map((route) => {
            return route.private ? (
              <PrivateRoute key={route.name} {...route} />
            ) : (
              <PublicRoute key={route.name} {...route} />
            );
          })}
        </Switch>
      </Suspense>
    </Layout>
  );
};

export default App;
