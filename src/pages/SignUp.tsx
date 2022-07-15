import styled from "styled-components";
import { Logo } from "../components/Logo";

export const SignUp = () => {
  return (
    <Container>
      <CardContainer>
        <div>
          <Logo />
        </div>
        <div>
          <form>
            <div>
              <input placeholder="Nome"></input>
              <input placeholder="Sobrenome"></input>
            </div>
            <input placeholder="Email"></input>
            <input placeholder="Senha"></input>
            <SignUpButton>SignUp</SignUpButton>
            <a href="/login">Já possui uma conta?</a>
          </form>
        </div>
      </CardContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #ffffff;
  display: flex;
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;

    input {
      border-radius: 10px;
      padding: 15px;
      border: solid 1px #7c7c7c;
      outline: none;

      &:focus {
        border: solid 1px #ee7202;
      }
    }
    div {
      display: flex;
      gap: 20px;
    }

    a {
      color: #ee7202;
      font-family: sans-serif;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;

  & > div {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  > * {
    &:first-child {
      height: 300px;
      border-right: 1px solid #ee7202;
    }
  }
`;

const SignUpButton = styled.button`
  border: 1px solid #ee7202;
  background: transparent;
  padding: 15px;
  border-radius: 10px;
  color: #ee7202;
  cursor: pointer;
  transition: 0.5s;

  &:disabled {
    background: #8d8d8d3b;
  }
  &:hover {
    background: #ee7202;
    color: white;
  }
`;
