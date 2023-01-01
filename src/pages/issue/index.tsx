import {
  IssueContainer,
  LinksContainer,
  ButtonNav,
  IssueTitle,
  IssueInfo,
  IssueBody,
  ButtonToGit,
} from "./styles";
import { NavBlock } from "../../components/nav-block";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import { FaGithub } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../lib/api/axios";
import { IssueType } from "../../@types/issue";
import { UserInfoType } from "../home";
import { formatDistanceToNow } from "date-fns/esm";
import ptBR from "date-fns/esm/locale/pt-BR";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

export function Issue() {
  const { issueId } = useParams<{ issueId: string }>();

  const [issue, setIssue] = useState<IssueType>();
  const [issueCreator, setIssueCreator] = useState<UserInfoType>();

  useEffect(() => {
    api
      .get(
        `/repos/Pedro-Augusto-Barbosa-Aparecido/github-blog/issues/${issueId}`
      )
      .then(async (response) => {
        setIssue(response.data);

        const userResponse = await api.get(
          `/users/${response.data.user.login}`
        );
        setIssueCreator(userResponse.data);
      });
  }, [issueId]);

  return (
    <IssueContainer>
      <NavBlock>
        <LinksContainer>
          <ButtonNav to={"/"}>
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>voltar</span>
          </ButtonNav>
          <ButtonToGit href={issue?.html_url ?? "/"}>
            <span>view no github</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </ButtonToGit>
        </LinksContainer>
        <IssueTitle>JavaScript data types and data structures</IssueTitle>
        <IssueInfo>
          <div>
            <FaGithub size={20} />
            <span>{issueCreator?.name ?? issueCreator?.login}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>
              {" "}
              {issue &&
                formatDistanceToNow(new Date(issue.created_at), {
                  addSuffix: true,
                  locale: ptBR,
                }).replaceAll("cerca de", "")}
            </span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComments} />
            <span>{issue?.comments} comentários</span>
          </div>
        </IssueInfo>
      </NavBlock>
      <IssueBody
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={dark}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {issue?.body ?? ""}
      </IssueBody>
    </IssueContainer>
  );
}
