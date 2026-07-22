import type { SVGProps } from "react";

export const HeartsSuitIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 22C14.4398 20.8824 23 14.6884 23 9.0107C23 5.69129 20.3468 3 17.0776 3C14.9216 3 13.3112 4.37247 12 5.91259C10.691 4.37024 9.0784 3 6.9224 3C3.651 3 1 5.69129 1 9.0107C1 14.6884 9.5602 20.8824 12 22Z"
        fill="currentColor"
      />
    </svg>
  );
};
