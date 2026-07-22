import type { SVGProps } from "react";

export const ExpandObjIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 20L2 2L20 2L20 5L5 5L5 20L2 20Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46 28V46H28V43H43V28H46Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 16C11 13.2386 13.2386 11 16 11H32C34.7614 11 37 13.2386 37 16V32C37 34.7614 34.7614 37 32 37H16C13.2386 37 11 34.7614 11 32V16Z"
        fill="currentColor"
      />
    </svg>
  );
};
