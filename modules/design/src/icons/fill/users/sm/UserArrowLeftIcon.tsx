import type { SVGProps } from "react";

export const UserArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle cx="12" cy="5.5" r="4.5" strokeWidth="0" fill="currentColor" />
      <path
        d="m11.672,19.414c-.781-.781-.781-2.047,0-2.828l3.861-3.861c-1.086-.465-2.279-.725-3.533-.725-4.962,0-9,4.038-9,9v.781l.757.189c2.735.684,5.489,1.025,8.243,1.025,1.032,0,2.063-.064,3.094-.16l-3.422-3.422Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <polygon
        points="24 17 16.914 17 19.914 14 18.5 12.586 13.086 18 18.5 23.414 19.914 22 16.914 19 24 19 24 17"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
