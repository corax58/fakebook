import { useQuery } from "@tanstack/react-query";
import APICLient from "../services/apiClient";
import axios from "axios";
import { useAuthContext } from "./useAuthContext";

const usePosts = () => {
  const { user } = useAuthContext();

  const fetchPosts = () =>
    axios
      .get(import.meta.env.VITE_SERVER_URL + "/posts", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => res.data);

  const query = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    enabled: !!user,
  });

  if (!user) {
    return { waitingForContext: "waiting for context" };
  }

  return query;
};

export default usePosts;
