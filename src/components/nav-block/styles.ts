import styled from "styled-components";

export const NavContainer = styled.nav`
  min-width: 54rem;
  height: fit-content;

  background-color: ${(props) => props.theme["gray-800"]};
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);

  border-radius: 10px;

  padding: 2rem 2rem 2rem 2.5rem;

  img {
    width: 9.25rem;
    height: 9.25rem;

    border: 0;
    border-radius: 8px;
  }

  display: flex;

  justify-content: flex-start;
  align-items: flex-start;

  gap: 2rem;
`;
