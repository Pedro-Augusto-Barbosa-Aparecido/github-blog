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
}

export function PostCard({ description, title, createdAt }: PostCardProps) {
  return (
    <PostCardContainer to={"/"}>
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
