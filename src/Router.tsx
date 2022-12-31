import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/default";
import { Home } from "./pages/home";
import { Issue } from "./pages/issue";

export function Router() {
  return (
    <Routes>
      <Route path={"/"} element={<DefaultLayout />}>
        <Route path={"/"} element={<Home />} />
        <Route path={"/issue/:issueId"} element={<Issue />} />
      </Route>
    </Routes>
  );
}
