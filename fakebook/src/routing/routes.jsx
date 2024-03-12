import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/Homepage";
import SingupPage from "../pages/SignupPage";
import SearchPage from "../pages/SearchPage";
const router = createBrowserRouter([
  { path: "/", element: <HomePage></HomePage> },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SingupPage /> },
  { path: "/search", element: <SearchPage /> },
]);

export default router;
