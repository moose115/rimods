import styled, { css } from 'styled-components';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { useState } from 'react';

interface MenuProps {
  readonly isOpen: boolean;
}

const StyledNav = styled.nav`
padding: 0 .5rem;
display: flex;
`;

const MenuButton = styled.button`
padding: 0;
background: transparent;
border: none;
color: inherit;
cursor: pointer;
`;

const MenuList = styled.ul<MenuProps>`
margin: 0;
min-height: 100vh;
width: 100vw;
display: flex;
${({ isOpen }) => (!isOpen && 'visibility: hidden;')}
list-style: none;
position: fixed;
top: 0;
left: 0;
${({ isOpen }) => (!isOpen && 'transform: translateX(100vw);')}
transition: .2s;
`;

const MenuLink = styled.a``;

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledNav>
      <MenuButton type="button" aria-label="open menu" onClick={() => setIsOpen(true)}><MenuIcon size="48px" /></MenuButton>
      <MenuList isOpen={isOpen}>
        <MenuButton type="button" aria-label="close menu" onClick={() => setIsOpen(false)}><CloseIcon size="48px" /></MenuButton>
        <li>
          <MenuLink href="#">Link</MenuLink>
        </li>
        <li>
          <MenuLink href="#">Link</MenuLink>
        </li>
        <li>
          <MenuLink href="#">Link</MenuLink>
        </li>
      </MenuList>
    </StyledNav>
  );
};

export default Menu;
