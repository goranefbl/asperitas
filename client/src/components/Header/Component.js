import React from 'react';
import styled from 'styled-components/macro';
import HeaderLogo from './Logo';
import HeaderNavLink from './NavLink';
import HeaderUsername from './Username';
import HeaderDarkButtonContainer from './DarkButton/Container';

const Wrapper = styled.header`
  position: sticky;
  z-index: 10;
  top: 0;
  display: flex;
  align-items: stretch;
  margin-bottom: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  height: 48px;
  padding: 0 10vw;
  background-color: ${props => props.theme.foreground};
  user-select: none;
  
  @media (max-width: 425px) {
    margin-bottom: 16px;
    height: 40px;
  }

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const Header = ({ user, logout }) => (
  <Wrapper>
    <HeaderLogo />
    <HeaderDarkButtonContainer />
    {user ? (
      <>
        <HeaderUsername>{user.username}</HeaderUsername>
        <HeaderNavLink as='span' onClick={logout}>
          log out
        </HeaderNavLink>
      </>
    ) : (
      <>
        <HeaderNavLink to='/login'>log in</HeaderNavLink>
        <HeaderNavLink to='/signup'>sign up</HeaderNavLink>
      </>
    )}
  </Wrapper>
);

export default Header;
