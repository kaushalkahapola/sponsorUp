import React, { useState, useEffect } from "react";
import { Route, Navigate } from "react-router-dom";
import { Box, Progress } from "@radix-ui/themes";
import { auth } from "./firebase/firebase";
import getUserType from "./firebase/getUserType"; // Adjust the path as necessary

const PrivateRoute = ({ element: Component, requiredUserType, ...rest }) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setIsAuthenticated(true);
        const type = await getUserType(user.uid);
        setUserType(type);
        // console.log(userType);
      } else {
        setIsAuthenticated(false);
      }
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup function to unsubscribe from the listener
  }, []);

  if (loading) {
    return (
      <Box maxWidth="70vh" className="flex justify-center items-center w-screen h-screen mx-auto">
        <Progress />
      </Box>
    ); // You can replace this with a loading spinner
  }

  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }

  if (requiredUserType !== "any" && userType !== requiredUserType) {
    return <Navigate to="/" />;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
