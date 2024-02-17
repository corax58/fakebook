import { useQuery } from "@tanstack/react-query";
import APICLient from "../services/apiClient";
import axios from "axios";

const usePosts = () => {
  const fetchPosts = () =>
    axios
      .get(import.meta.env.VITE_SERVER_URL + "/posts")
      .then((res) => res.data);
  return useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
};

export default usePosts;
