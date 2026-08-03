import { useQuery } from "@tanstack/react-query";
import { commenterKeys } from "./commenterKeys";
import { createFetcher, toCommentList, unwrap, withPage } from "./commenterRequest";
import type { CommenterCommentType } from "./types";

type UseGetCommentsOptionsType = {
  /** `GET` endpoint. The query stays disabled while it is undefined. */
  listUrl?: string;
  /** Page the comments belong to — sent as a `page` query parameter. */
  page: string;
};

/** Read the comments left on the current page. */
export const useGetComments = ({ listUrl, page }: UseGetCommentsOptionsType) => {
  return useQuery({
    queryKey: commenterKeys.list(listUrl ?? "", page),
    enabled: Boolean(listUrl),
    queryFn: async ({ signal }): Promise<CommenterCommentType[]> => {
      if (!listUrl) return [];

      const response = await createFetcher(signal).get(withPage(listUrl, page));

      return toCommentList(unwrap(response));
    },
  });
};
