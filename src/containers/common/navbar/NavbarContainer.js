import React from "react";
import NavbarComponent from "../../../components/common/navbar/NavbarComponent";
import { useHistory } from "react-router-dom";

function NavbarContainer({ isLoggined, setIsLoggined }) {
  const history = useHistory();

  const onClickSignout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggined(false);
    history.push("/");
  };

  return (
    <NavbarComponent isLoggined={isLoggined} onClickSignout={onClickSignout} />
  );
}

export default NavbarContainer;
