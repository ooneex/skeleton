import type { SVGProps } from "react";

export const CursorMenuIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M15 25H30V27H15V25Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M15 20H30V22H15V20Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 15H30V32H15V15ZM17 17V30H28V17H17Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M7.21422 20.1399L2.04395 2.04395L20.1399 7.21422L11.7382 11.7382L7.21422 20.1399Z" fill="currentColor" />
    </svg>
  );
};
