import styled from "styled-components";

export const Input = styled.input`
  border: 1px solid ${(props) => props.theme["gray-600"]};
  border-radius: 8px;

  width: 100%;
  height: 50px;

  padding: 0.75rem 1rem;

  outline: none;

  background-color: ${(props) => props.theme.black};

  font-family: "Nunito", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 160%;

  color: ${(props) => props.theme["blue-300"]};

  &::placeholder {
    font-family: "Nunito", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;

    color: ${(props) => props.theme["gray-500"]};
  }

  &:focus {
    outline: none;

    border-color: ${(props) => props.theme["blue-500"]};
  }
`;
