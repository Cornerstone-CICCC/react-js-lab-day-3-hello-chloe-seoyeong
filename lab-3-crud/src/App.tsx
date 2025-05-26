import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import BlogNew from "./pages/BlogNew";
import BlogEdit from "./pages/BlogEdit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Outlet />}>
            <Route index element={<Blog />} />
            <Route path=":id" element={<BlogDetail />} />
            <Route path="new" element={<BlogNew />} />
            <Route path="edit/:id" element={<BlogEdit />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
