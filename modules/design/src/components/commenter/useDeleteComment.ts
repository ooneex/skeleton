import { useMutation, useQueryClient } from "@tanstack/react-query";
import { commenterKeys } from "./commenterKeys";
import { createFetcher, resolveUrl, unwrap } from "./commenterRequest";
import type { CommenterCommentType } from "./types";

type UseDeleteCommentOptionsType = {
  /** `DELETE` endpoint, with an optional `:id` placeholder. */
  deleteUrl?: string;
  listUrl?: string;
  page: string;
};

/** Delete a comment, dropping it from the list cache on success. */
export const useDeleteComment = ({ deleteUrl, listUrl, page }: UseDeleteCommentOptionsType) => {
  const queryClient = useQueryClient();
  const listKey = commenterKeys.list(listUrl ?? "", page);

  return useMutation({
    mutationFn: async (id: string): Promise<string> => {
      if (!deleteUrl) throw new Error("The commenter has no deleteUrl.");

      unwrap(await createFetcher().delete(resolveUrl(deleteUrl, id)));

      return id;
    },
    onSuccess: (id) => {
      queryClient.setQueryData<CommenterCommentType[]>(listKey, (current) =>
        (current ?? []).filter((comment) => comment.id !== id),
      );

      return queryClient.invalidateQueries({ queryKey: commenterKeys.lists() });
    },
  });
};
