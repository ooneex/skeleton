import type { SVGProps } from "react";

export const FlaskIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="5" y="1" width="14" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <path
        d="m19.759,18.336l-3.759-5.639v-7.697h-8v7.697l-3.759,5.638c-.615.922-.673,2.102-.149,3.08.522.978,1.537,1.585,2.646,1.585h10.525c1.108,0,2.123-.607,2.646-1.585.523-.978.466-2.157-.149-3.079Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
