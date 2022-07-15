import { FormEvent, useState } from "react";
import styled from "styled-components";
import { Logo } from "../components/Logo";
import { api } from "../api/api";

export const Login = () => {
  const [user, setUser] = useState({});

  const sendUser = async (event: FormEvent) => {
    event.preventDefault();
    const token = await api.post("/api/auth/local", user);
    const {
      data: { jwt },
    } = token;
    localStorage.setItem("token", jwt);
  };
  return (
    <Container>
      <CardContainer>
        <div>
          <Logo />
        </div>
        <div>
          <form
            onSubmit={(e) => {
              sendUser(e);
            }}
          >
            <input
              onChange={(e) => {
                setUser({ ...user, identifier: e.target.value });
              }}
              placeholder="Email"
            />
            <input
              placeholder="Senha"
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
            />
            <SignUpButton>Login</SignUpButton>
            <div>
              <a href="#">Esqueceu a senha?</a>
              <a href="/signup">Não Possui conta?</a>
            </div>
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
    min-width: 40%;

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
      justify-content: space-between;
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
