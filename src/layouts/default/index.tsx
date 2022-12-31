import { Container } from "./styles";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/header";

export function DefaultLayout() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}
