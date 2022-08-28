import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 1em;
`;

const Logo = styled.img`
  height: 4em;
`;

type Props = {};

const Menu = (props: Props) => (
  <Nav>
    <Logo src="/assets/title.png" alt="Rimods" />
    <a href="https://ko-fi.com/L3L7EEMB1" target="_blank" rel="noreferrer">
      <img
        height="36"
        style={{ border: '0px', height: '36px' }}
        src="https://cdn.ko-fi.com/cdn/kofi5.png?v=3"
        alt="Buy Me a Coffee at ko-fi.com"
      />
    </a>
  </Nav>
);

export default Menu;
