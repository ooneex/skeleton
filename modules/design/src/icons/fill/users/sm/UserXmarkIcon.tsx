import type { SVGProps } from "react";

export const UserXmarkIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle cx="11" cy="5.5" r="4.5" strokeWidth="0" fill="currentColor" />
      <path
        d="m12.672,22.914c-.781-.781-.781-2.047,0-2.828l2.085-2.086-2.085-2.086c-.781-.781-.781-2.047,0-2.828l.746-.746c-.771-.216-1.58-.34-2.418-.34-4.962,0-9,4.038-9,9v.781l.757.189c2.735.684,5.489,1.025,8.243,1.025.567,0,1.134-.024,1.701-.053l-.029-.029Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <polygon
        points="23.914 14.5 22.5 13.086 19 16.586 15.5 13.086 14.086 14.5 17.586 18 14.086 21.5 15.5 22.914 19 19.414 22.5 22.914 23.914 21.5 20.414 18 23.914 14.5"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
