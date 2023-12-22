import React from "react";
import { useEffect, useState } from "react";

const LoginContext = React.createContext({
  isLoggedIn: false, // Login state
  accessToken: null, // Access token from local storage
  user: null, // User data
  setIsLoggedIn: () => { }, // Function to update login state
  setAccessToken: () => { }, // Function to update access token
});

const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null)
  const [accessToken, setAccessToken] = useState(() => {
    // Get access token from local storage if present
    return localStorage.getItem("accessToken");
  });

  // Update login state based on accessToken presence
  useEffect(() => {
    if (accessToken) {
      setIsLoggedIn(true);
      localStorage.setItem('accessToken', accessToken)
    } else {
      setIsLoggedIn(false);
      setUser(null)
      localStorage.removeItem('accessToken', accessToken)
    }
  }, [accessToken]);

  // Update access token on successful login
  const handleLogin = (newAccessToken, userData) => {
    setAccessToken(newAccessToken);
    setIsLoggedIn(!!newAccessToken);
    setUser(userData)
    localStorage.setItem('accessToken', newAccessToken)
  };

  const contextValue = {
    isLoggedIn,
    accessToken,
    user,
    setIsLoggedIn: handleLogin,
    setAccessToken,
  };

  return (
    <LoginContext.Provider value={contextValue}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginProvider };
