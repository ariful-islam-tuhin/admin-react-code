import React from "react";
import { Redirect, Route } from "react-router";

import { LinearProgress } from "@mui/material";
import useAuth from "../../Hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, isLoading } = useAuth();
  if (isLoading) {return  <LinearProgress color="success" />}
  return (
    <>
      <Route
        {...rest}
        render={({ location }) =>
          user?.email && admin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location },
              }}
            ></Redirect>
          )
        }
      ></Route>
    </>
  );
};

export default AdminRoute;
