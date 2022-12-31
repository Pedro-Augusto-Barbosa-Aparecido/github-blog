import { HeaderContainer } from "./styles";
import headerImg from "../../assets/header.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={headerImg} alt={""} />
    </HeaderContainer>
  );
}
