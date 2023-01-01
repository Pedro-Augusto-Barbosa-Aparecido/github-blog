import styled from "styled-components";

export const SpinnerContainer = styled.svg`
  animation: rotate 2s linear infinite;

  margin: 1rem 0;
  width: 50px;
  height: 50px;

  & > circle {
    stroke: ${(props) => props.theme["blue-100"]};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
