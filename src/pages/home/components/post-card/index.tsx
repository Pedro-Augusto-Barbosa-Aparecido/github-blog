import {
  PostCardContainer,
  PostCardTitle,
  PostCardDescription,
  PostCardCreatedAt,
} from "./styles";

import { formatDistanceToNow } from "date-fns/esm";
import ptBR from "date-fns/esm/locale/pt-BR/index.js";

interface PostCardProps {
  title: string;
  description: string;
  createdAt: Date;
  issueNumber: number;
}

export function PostCard({
  description,
  title,
  createdAt,
  issueNumber,
}: PostCardProps) {
  return (
    <PostCardContainer to={`/issue/${issueNumber}`}>
      <div>
        <PostCardTitle>{title}</PostCardTitle>
        <PostCardCreatedAt>
          {formatDistanceToNow(createdAt, {
            addSuffix: true,
            locale: ptBR,
          }).replaceAll("cerca de", "")}
        </PostCardCreatedAt>
      </div>
      <PostCardDescription>{description}</PostCardDescription>
    </PostCardContainer>
  );
}
