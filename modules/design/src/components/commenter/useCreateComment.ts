import { useMutation, useQueryClient } from "@tanstack/react-query";
import { commenterKeys } from "./commenterKeys";
import { createFetcher, unwrap } from "./commenterRequest";
import type { CommenterCommentType, CommenterSubmitType } from "./types";

type UseCreateCommentOptionsType = {
  /** `POST` endpoint. */
  createUrl?: string;
  listUrl?: string;
  page: string;
};

/** Persist a new comment, seeding the list cache with what the backend stored. */
export const useCreateComment = ({ createUrl, listUrl, page }: UseCreateCommentOptionsType) => {
  const queryClient = useQueryClient();
  const listKey = commenterKeys.list(listUrl ?? "", page);

  return useMutation({
    mutationFn: async (comment: CommenterSubmitType): Promise<CommenterCommentType> => {
      if (!createUrl) throw new Error("The commenter has no createUrl.");

      const response = await createFetcher().post(createUrl, { ...comment, page });

      return unwrap<CommenterCommentType>(response);
    },
    onSuccess: (created) => {
      queryClient.setQueryData<CommenterCommentType[]>(listKey, (current) => [...(current ?? []), created]);

      return queryClient.invalidateQueries({ queryKey: commenterKeys.lists() });
    },
  });
};
