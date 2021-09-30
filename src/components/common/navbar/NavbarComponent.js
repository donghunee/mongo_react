import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  AiOutlineSearch,
  AiOutlineBell,
  AiOutlineComment,
} from "react-icons/ai";
// import { FaRegCommentDots } from "react-icons/fa";

const NavbarWrap = styled.div`
  height: 6rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  position: fixed;
  width: 100%;
  background: #ffffff;
`;

const NavContainer = styled.div`
  max-width: 99.6rem;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavFrontWrap = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const NavLogo = styled.div`
  font-size: 2rem;
  font-weight: bolder;
`;

const NavLinkWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 3rem;
`;

const NavStyledLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: normal;
  text-decoration: none;
  color: #000000;
  margin-right: 10px;
`;

const NavProfileWrap = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const NavIconsWrap = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const NavStyledIcon = styled.div`
  font-size: 2.5rem;
  display: flex;
  align-items: center;

  & + & {
    margin-left: 1rem;
  }
`;

const NavProfileImg = styled.img`
  width: 3.4rem;
  height: 3.4rem;
  margin-left: 3rem;
`;

function NavbarComponent({ isLoggined }) {
  return (
    <>
      <NavbarWrap>
        <NavContainer>
          <NavFrontWrap>
            <NavLogo>Sssac</NavLogo>
            <NavLinkWrap>
              {!isLoggined ? (
                <>
                  <NavStyledLink to="/signin">로그인</NavStyledLink>
                  <NavStyledLink to="/signup">회원가입</NavStyledLink>
                </>
              ) : (
                <>
                  <NavStyledLink to="/write">글쓰기</NavStyledLink>
                  <NavStyledLink to="/signout">로그아웃</NavStyledLink>
                </>
              )}
            </NavLinkWrap>
          </NavFrontWrap>
          <NavProfileWrap>
            <NavIconsWrap>
              <NavStyledIcon>
                <AiOutlineSearch />
              </NavStyledIcon>
              <NavStyledIcon>
                <AiOutlineComment />
              </NavStyledIcon>
              <NavStyledIcon>
                <AiOutlineBell />
              </NavStyledIcon>
            </NavIconsWrap>
            <NavProfileImg
              src={
                "https://careerly.co.kr/_next/static/images/img_profile-dummy-9e28d259cbf9e126af9c467a4bf0884f.png"
              }
            />
          </NavProfileWrap>
        </NavContainer>
      </NavbarWrap>
    </>
  );
}

export default NavbarComponent;
