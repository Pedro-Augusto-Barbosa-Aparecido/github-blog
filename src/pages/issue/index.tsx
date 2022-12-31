import {
  IssueContainer,
  LinksContainer,
  ButtonNav,
  IssueTitle,
  IssueInfo,
} from "./styles";
import { NavBlock } from "../../components/nav-block";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FaGithub } from "react-icons/fa";

export function Issue() {
  return (
    <IssueContainer>
      <NavBlock>
        <LinksContainer>
          <ButtonNav to={"/"}>
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>voltar</span>
          </ButtonNav>
          <ButtonNav to={"/"}>
            <span>view no github</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </ButtonNav>
        </LinksContainer>
        <IssueTitle>JavaScript data types and data structures</IssueTitle>
        <IssueInfo>
          <div>
            <FaGithub size={20} />
            <span>testet</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <span>asdasdasdasdad</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>15 comentários</span>
          </div>
        </IssueInfo>
      </NavBlock>
    </IssueContainer>
  );
}
