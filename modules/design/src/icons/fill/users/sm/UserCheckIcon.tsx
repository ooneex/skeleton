import type { SVGProps } from "react";

export const UserCheckIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle cx="11" cy="5.5" r="4.5" strokeWidth="0" fill="currentColor" />
      <path
        d="m10.172,21.414c-.781-.781-.781-2.047,0-2.828l1.414-1.414c.391-.391.902-.586,1.414-.586s1.023.195,1.414.586l1.086,1.085,2.672-2.672c-1.644-2.173-4.243-3.586-7.172-3.586-4.963,0-9,4.038-9,9v.781l.758.189c2.734.684,5.488,1.025,8.242,1.025.244,0,.487-.017.731-.023l-1.559-1.559Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <polygon
        points="15.5 23.914 11.586 20 13 18.586 15.5 21.086 22 14.586 23.414 16 15.5 23.914"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
