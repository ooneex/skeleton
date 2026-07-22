import type { SVGProps } from "react";

export const BorderIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 2L30 30L2 30L2 2H30ZM17 7V12H15V7H17ZM17 20H15V25H17V20ZM25 17H20V15H25V17ZM12 17V15H7V17H12Z"
        fill="currentColor"
      />
    </svg>
  );
};
