import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { DefaultLayout } from "./Layouts/DefaultLayout";
import { Blog } from "./pages/Blog";

export function Router() {
    return (
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Blog />} />
        </Route>
      </Routes>
    );
  }