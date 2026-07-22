import type { SVGProps } from "react";

export const MoveObjUpIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M30 30L30 19L2 19L2 30L30 30Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M17 16V2.5H15V16H17Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.50003 10.4142L16 3.91418L22.5001 10.4142L23.9143 8.99997L16 1.08576L8.08582 8.99997L9.50003 10.4142Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
