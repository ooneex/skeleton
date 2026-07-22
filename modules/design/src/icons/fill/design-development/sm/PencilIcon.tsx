import type { SVGProps } from "react";

export const PencilIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect
        x="5.24"
        y="10.75"
        width="14.021"
        height="2"
        transform="translate(-4.721 12.104) rotate(-45)"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <path
        d="m21.172,2.828c-1.77-1.768-4.646-1.766-6.414,0L3.066,14.52l-1.283,7.697,7.697-1.283,11.691-11.691c1.768-1.768,1.768-4.645,0-6.414Zm-12.652,16.238l-4.303.717.717-4.303L14.5,5.914l3.586,3.586-9.566,9.566Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
