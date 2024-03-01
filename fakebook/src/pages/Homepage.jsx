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
      <div className="  h-full w-full bg-secondary ">
        <div className="fixed w-full">
          <NavBar />
        </div>
        <div className="h-14 w-full"></div>
        <div className="flex">
          <div className=" w-2/5 md:hidden">
            <TopUsers />
          </div>

          <div className="flex flex-col items-center w-6/12 px-1 md:w-3/5 sm:w-full">
            <PostForum />
            <PostPanel />
          </div>
          <div className="w-1/3 sm:hidden md:w-1/2">
            <TopPosts />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
