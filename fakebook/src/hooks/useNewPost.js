import { useAuthContext } from "./useAuthContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const useNewPost = () => {
  const queryclient = useQueryClient();
  const { user } = useAuthContext();

  const mutation = useMutation({
    mutationFn: (post) =>
      axios
        .post(import.meta.env.VITE_SERVER_API_URL + "/posts", post, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((res) => res.data),
    onSuccess: (data) => {
      queryclient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
  });

  if (!user) {
    return { error: "not logged in", waitingForContext: true };
  }

  return mutation;
};

export default useNewPost;
