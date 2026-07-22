import type { SVGProps } from "react";

export const UserSearchIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle cx="11" cy="5.5" r="4.5" strokeWidth="0" fill="currentColor" />
      <path
        d="m11.025,17.525c0-2.095,1.001-3.957,2.545-5.147-.815-.244-1.677-.379-2.571-.379-4.962,0-9,4.038-9,9v.781l.757.189c2.735.684,5.489,1.025,8.243,1.025.941,0,1.883-.055,2.823-.135-1.688-1.175-2.798-3.127-2.798-5.336Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="m23.939,22.525l-2.614-2.614c.437-.693.7-1.508.7-2.386,0-2.481-2.019-4.5-4.5-4.5s-4.5,2.019-4.5,4.5,2.019,4.5,4.5,4.5c.879,0,1.693-.263,2.386-.7l2.614,2.614,1.414-1.414Zm-8.914-5c0-1.378,1.121-2.5,2.5-2.5s2.5,1.122,2.5,2.5-1.121,2.5-2.5,2.5-2.5-1.122-2.5-2.5Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
