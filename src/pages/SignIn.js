import React from "react";
import FullCenterContainer from "../components/common/container/FullCenterContainer";
import SignInContainer from "../containers/auth/SignInContainer";

function SignIn() {
  return (
    <>
      <FullCenterContainer>
        <SignInContainer />
      </FullCenterContainer>
    </>
  );
}

export default SignIn;
