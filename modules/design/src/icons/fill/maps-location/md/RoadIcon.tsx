import type { SVGProps } from "react";

export const RoadIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.1421 2H25.8579L30.1656 30H1.83441L6.1421 2ZM17 23V28H15V23H17ZM17 16H15V20H17V16ZM17 9V13H15V9H17ZM17 4H15V6.5H17V4Z"
        fill="currentColor"
      />
    </svg>
  );
};
