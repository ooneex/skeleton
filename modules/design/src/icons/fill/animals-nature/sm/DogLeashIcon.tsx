import type { SVGProps } from "react";

export const DogLeashIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="m6,11h-2c-2.206,0-4-1.794-4-4v-1h2v1c0,1.103.897,2,2,2h2v2Z" strokeWidth="0" fill="currentColor" />
      <path
        d="m12.5,8h-1c-3.309,0-6-2.691-6-6v-1h2v1c0,2.206,1.794,4,4,4h1v2Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <path
        d="m13.336,9h-7.336c-1.654,0-3,1.346-3,3v11h4v-3.763l1.653-3.308,6.347,2.105v4.965h4v-5.89l1.092-4.917-6.757-3.193Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="m19.414,4l-2.751-2.751-2.534,5.913,6.409,3.029.265-1.191h.198c1.654,0,3-1.346,3-3v-2h-4.586Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
