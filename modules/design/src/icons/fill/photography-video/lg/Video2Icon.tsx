import type { SVGProps } from "react";

export const Video2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 14C2 10.6863 4.68629 8 8 8H31C34.3137 8 37 10.6863 37 14V15.3005L46 10.3005V37.6995L37 32.6995V34C37 37.3137 34.3137 40 31 40H8C4.68629 40 2 37.3137 2 34V14ZM10 14C8.89543 14 8 14.8954 8 16C8 17.1046 8.89543 18 10 18C11.1046 18 12 17.1046 12 16C12 14.8954 11.1046 14 10 14Z"
        fill="currentColor"
      />
    </svg>
  );
};
