import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: flex-start;

  flex-direction: column;

  min-width: 54rem;
  margin-top: -5.5rem;
`;

export const UserInfoContainer = styled.div`
  position: relative;

  display: flex;

  flex-direction: column;

  justify-content: flex-start;
  align-items: flex-start;

  gap: 0.5rem;
`;

export const Title = styled.span`
  font-family: "Nunito", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 130%;

  color: ${(props) => props.theme["blue-100"]};
`;

export const Bio = styled.p`
  font-family: "Nunito", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 160%;

  color: ${(props) => props.theme["blue-300"]};

  max-width: 38.25rem;
`;

export const GitHubLink = styled.a`
  font-family: "Nunito", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 160%;

  display: flex;

  justify-content: flex-start;
  align-items: center;

  color: ${(props) => props.theme["blue-500"]};

  position: absolute;

  top: 0;
  right: 0;

  text-decoration: none;

  gap: 0.5rem;
`;

export const AccountInfo = styled.div`
  display: flex;

  align-items: flex-start;
  justify-content: flex-start;

  gap: 1.5rem;

  margin-top: 1rem;

  div {
    display: flex;

    align-items: center;
    justify-content: flex-start;

    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme["gray-500"]};
    }

    span {
      font-family: "Nunito", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 100%;

      color: ${(props) => props.theme["blue-200"]};
    }
  }
`;