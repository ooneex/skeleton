import { useMutation, useQueryClient } from "@tanstack/react-query";
import { commenterKeys } from "./commenterKeys";
import { createFetcher, resolveUrl, unwrap } from "./commenterRequest";
import type { CommenterCommentType } from "./types";

type UseUpdateCommentOptionsType = {
  /** `PATCH` endpoint, with an optional `:id` placeholder. */
  updateUrl?: string;
  listUrl?: string;
  page: string;
};

/** Fields a comment can be patched with — its body and its resolved flag. */
export type CommenterPatchType = {
  id: string;
  body?: string;
  resolved?: boolean;
};

/** Patch an existing comment, replacing it in the list cache on success. */
export const useUpdateComment = ({ updateUrl, listUrl, page }: UseUpdateCommentOptionsType) => {
  const queryClient = useQueryClient();
  const listKey = commenterKeys.list(listUrl ?? "", page);

  return useMutation({
    mutationFn: async ({ id, ...patch }: CommenterPatchType): Promise<CommenterCommentType> => {
      if (!updateUrl) throw new Error("The commenter has no updateUrl.");

      const response = await createFetcher().patch(resolveUrl(updateUrl, id), patch);

      return unwrap<CommenterCommentType>(response);
    },
    onSuccess: (updated, { id }) => {
      queryClient.setQueryData<CommenterCommentType[]>(listKey, (current) =>
        (current ?? []).map((comment) => (comment.id === id ? { ...comment, ...updated } : comment)),
      );

      return queryClient.invalidateQueries({ queryKey: commenterKeys.lists() });
    },
  });
};
