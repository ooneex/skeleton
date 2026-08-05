/**
 * Query-key factory for the commenter. Reads and invalidations both go
 * through it so they can never drift apart.
 */
export const commenterKeys = {
  all: ["commenter"] as const,
  lists: () => [...commenterKeys.all, "list"] as const,
  list: (url: string, page: string) => [...commenterKeys.lists(), url, page] as const,
};
