import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { NavLink } from "react-router-dom";

export const PostCardContainer = styled(NavLink)`
  background-color: ${(props) => props.theme["gray-700"]};

  border: 2px solid transparent;
  border-radius: 10px;

  display: flex;

  flex-direction: column;

  align-items: flex-start;
  justify-content: flex-start;

  padding: 2rem;
  gap: 1.25rem;

  max-width: 26rem;
  max-height: 16.25rem;
  overflow: hidden;
  text-overflow: ellipsis;

  & > div {
    display: flex;

    justify-content: space-between;
    align-items: flex-start;
    width: 100%;

    gap: 1rem;

    & > span {
      display: block;
      max-width: 16rem;
    }
  }

  position: relative;

  text-decoration: none;

  &:hover {
    border-color: ${(props) => props.theme["gray-500"]};
    cursor: pointer;
  }
`;

export const PostCardTitle = styled.span`
  max-width: 17.5rem;

  font-family: "Nunito", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 160%;

  color: ${(props) => props.theme["blue-100"]};
`;

export const PostCardDescription = styled(ReactMarkdown)`
  font-family: "Nunito", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 160%;

  display: flex;

  flex-direction: column;

  justify-content: flex-start;
  align-items: flex-start;

  max-height: 7rem;

  color: ${(props) => props.theme["blue-300"]};

  p {
    max-height: 7rem;
    max-width: 22rem;

    display: -webkit-box;

    -webkit-line-clamp: 4; /** número de linhas que você quer exibir */
    -webkit-box-orient: vertical;

    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const PostCardCreatedAt = styled.span`
  font-family: "Nunito", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 160%;

  color: ${(props) => props.theme["gray-400"]};

  text-transform: capitalize;
`;
