import React from "react";
import styled from "styled-components";
import RoundedInput from "../common/input/RoundedInput";
import RoundedButton from "../common/button/RoundedButton";
import InputLable from "../common/text/InputLable";
import InputTitle from "../common/text/InputTitle";
import BorderBox from "../common/box/BorderBox";

const FormWrap = styled.div`
  margin-top: 2rem;
`;

const InputWrap = styled.div`
  & + & {
    margin-top: 3rem;
  }
`;

function SignInComponent() {
  return (
    <BorderBox>
      <InputTitle>로그인</InputTitle>
      <FormWrap>
        <InputWrap>
          <InputLable>유저 아이디</InputLable>
          <RoundedInput />
        </InputWrap>
        <InputWrap>
          <InputLable>비밀 번호</InputLable>
          <RoundedInput />
        </InputWrap>
        <RoundedButton>로그인</RoundedButton>
      </FormWrap>
    </BorderBox>
  );
}

export default SignInComponent;
