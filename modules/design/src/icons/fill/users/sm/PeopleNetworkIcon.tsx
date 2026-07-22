import type { SVGProps } from "react";

export const PeopleNetworkIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle cx="12" cy="13" r="3" strokeWidth="0" fill="currentColor" />
      <circle cx="12" cy="3" r="3" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <circle cx="5" cy="8" r="3" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <circle cx="19" cy="8" r="3" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <path
        d="m12,17c-2.655,0-5.05,1.473-6.251,3.845-.234.466-.211,1.009.062,1.453.271.439.741.702,1.257.702h9.865c.516,0,.985-.263,1.257-.702.272-.444.296-.987.061-1.455-1.2-2.37-3.595-3.843-6.25-3.843Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
