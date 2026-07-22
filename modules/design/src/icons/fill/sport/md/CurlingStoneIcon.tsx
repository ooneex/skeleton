import type { SVGProps } from "react";

export const CurlingStoneIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M31 21C31 25.4183 27.4183 29 23 29H9C4.58172 29 1 25.4183 1 21H31Z" fill="currentColor" />
      <path
        d="M9 4H18.5935C19.9996 4 21.217 4.9766 21.522 6.34921L22.3333 10H17V8H9C7.89543 8 7 7.10457 7 6C7 4.89543 7.89543 4 9 4Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M23 12C27.0795 12 30.4433 15.0538 30.9355 19H1.06445C1.55669 15.0538 4.92049 12 9 12H23Z"
        fill="currentColor"
      />
    </svg>
  );
};
