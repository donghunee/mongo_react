import GlobalStyles from "./GlobalStyles";
import NavbarContainer from "./containers/common/navbar/NavbarContainer";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { useEffect, useState } from "react";

function App() {
  const [isLoggined, setIsLoggined] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      setIsLoggined(true);
    } else {
      setIsLoggined(false);
    }
  }, []);

  return (
    <>
      <GlobalStyles />
      <NavbarContainer isLoggined={isLoggined} />
      <Route path="/" exact={true} component={Home} />
      <Route path="/signin" exact={true} component={SignIn} />
      <Route path="/signup" exact={true} component={SignUp} />
    </>
  );
}

export default App;
