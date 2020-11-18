import { ReactNode } from 'react';
import styled from 'styled-components';

type ButtonProps = {
  children: ReactNode,
  width: string | number,
  link?: boolean
};

const StyledButton = styled.a`
box-sizing: content-box;
${({ width }: ButtonProps) => (width ? `width: ${width}px;` : '')}
margin: 0;
padding: 0;
// padding: 5px 15px;
display: inline-block;
background-color: #6a512e;
border: 4px solid;
border-top-color: #7d6133;
border-right-color: #7d6133;
border-bottom-color: #4f3d22;
border-left-color: #4f3d22;
position: relative;
color: var(--primary);
font-size: 1rem;
text-align: center;
outline: 0;
cursor: pointer;

&:hover {
  background-color: #886432;
  border-top-color: #967136;
  border-right-color: #967136;
  border-bottom-color: #664b25;
  border-left-color: #664b25;
}

&:active {
  padding: 0;
  background-color: #624927;
  border-top-color: #584223;
  border-right-color: #584223;
  border-bottom-color: #6d5636;
  border-left-color: #6d5636;
}

.plsad::after {
  content: '';
  width: calc(100% + 7px);
  height: calc(100% + 7px);
  border: 1px solid black;
  position: absolute;
  top: -4px;
  right: 0;
  bottom: -4px;
  left: -4px;
}
`;

const Button = ({ children, width, link }: ButtonProps) => (
  <StyledButton
    as={link ? 'a' : 'button'}
    width={width}
  >
    {children}
  </StyledButton>
);

Button.defaultProps = {
  link: false,
};

export default Button;
