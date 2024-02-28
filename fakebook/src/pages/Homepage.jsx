import NavBar from "../components/NavBar";
import PostForum from "../components/PostForum";
import PostPanel from "../components/PostPanel";
import TopUsers from "../components/TopUsers";
import TopPosts from "../components/TopPosts";
import { useAuthContext } from "../hooks/useAuthContext";
import { Navigate } from "react-router-dom";

function App() {
  const { user } = useAuthContext();
  if (!user) return <Navigate to="/login" />;
  return (
    <>
      <div className="  h-full w-screen bg-secondary ">
        <NavBar />
        <div className="flex">
          <div className=" w-1/3 md:hidden">
            <TopUsers />
          </div>

          <div className="flex flex-col items-center w-full px-1">
            <PostForum />
            <PostPanel />
          </div>
          <div className="w-1/3 sm:hidden md:w-1/2">
            <TopPosts />
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
}

export default App;
