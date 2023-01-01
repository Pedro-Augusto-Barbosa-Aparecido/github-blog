import styled from "styled-components";
import { NavLink } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export const IssueContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: flex-start;

  flex-direction: column;

  width: 100%;

  padding-bottom: 8rem;
  margin-top: -5.5rem;

  nav {
    flex-direction: column;

    gap: 1.25rem;
  }
`;

export const IssueBody = styled(ReactMarkdown)`
  font-family: "Nunito", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 160%;

  color: ${(props) => props.theme["blue-300"]};

  padding: 2.5rem;

  width: 54rem;
  height: fit-content;

  display: flex;

  flex-direction: column;

  justify-content: flex-start;
  align-items: flex-start;

  gap: 1rem;

  a {
    color: ${(props) => props.theme["blue-500"]};
  }

  pre {
    width: 100%;

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    padding: 1rem;

    background-color: ${(props) => props.theme["gray-700"]};

    border: 0;
    border-radius: 2px;

    div {
      background-color: transparent !important;

      border: 0 !important;
      border-radius: 0 !important;

      padding: 0 !important;
      margin: 0 !important;

      box-shadow: none !important;
    }
  }
`;

export const IssueInfo = styled.div`
  display: flex;

  align-items: flex-start;
  justify-content: flex-start;

  gap: 1.5rem;

  margin-top: -0.75rem;

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

export const IssueTitle = styled.span`
  font-family: "Nunito", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 130%;

  color: ${(props) => props.theme["blue-100"]};
`;

export const LinksContainer = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: flex-start;

  width: 100%;
`;

export const ButtonNav = styled(NavLink)`
  font-family: "Nunito", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 160%;

  color: ${(props) => props.theme["blue-500"]};

  text-transform: uppercase;
  text-decoration: none;

  outline: none;

  display: flex;

  align-items: center;
  justify-content: flex-start;

  border-bottom: 2px solid transparent;

  gap: 0.5rem;

  &:hover {
    border-bottom-color: ${(props) => props.theme["blue-500"]};
  }
`;

export const ButtonToGit = styled.a`
  font-family: "Nunito", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 160%;

  color: ${(props) => props.theme["blue-500"]};

  text-transform: uppercase;
  text-decoration: none;

  outline: none;

  display: flex;

  align-items: center;
  justify-content: flex-start;

  border-bottom: 2px solid transparent;

  gap: 0.5rem;

  &:hover {
    border-bottom-color: ${(props) => props.theme["blue-500"]};
  }
`;
