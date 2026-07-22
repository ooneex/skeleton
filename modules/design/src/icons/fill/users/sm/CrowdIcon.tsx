import type { SVGProps } from "react";

export const CrowdIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle cx="5" cy="13" r="3" strokeWidth="0" fill="currentColor" />
      <path d="m5,17c-2.757,0-5,2.243-5,5v1h10v-1c0-2.757-2.243-5-5-5Z" strokeWidth="0" fill="currentColor" />
      <path d="m19,17c-2.757,0-5,2.243-5,5v1h10v-1c0-2.757-2.243-5-5-5Z" strokeWidth="0" fill="currentColor" />
      <circle cx="19" cy="13" r="3" strokeWidth="0" fill="currentColor" />
      <circle cx="12" cy="3" r="3" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <path
        d="m14.912,10.766l1.499-1.324-.661-.75c-.949-1.076-2.316-1.692-3.75-1.692s-2.8.617-3.749,1.692l-.662.75,1.498,1.324.662-.75c.571-.646,1.392-1.016,2.251-1.016s1.681.37,2.25,1.016l.662.75Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
