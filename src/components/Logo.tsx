import styled from "styled-components";

export const Logo = () => {
  return <LogoName>Superers Studying</LogoName>;
};

const LogoName = styled.h1`
  font-size: 48px;
  font-family: sans-serif;

  &::before {
    content: "";
    background: #ee7202;
    width: 10px;
    height: 10px;
    display: block;
    border-radius: 50%;
  }
`;
