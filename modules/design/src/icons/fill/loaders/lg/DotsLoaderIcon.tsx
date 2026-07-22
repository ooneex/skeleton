import type { SVGProps } from "react";

export const DotsLoaderIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M24 29C26.7614 29 29 26.7614 29 24C29 21.2386 26.7614 19 24 19C21.2386 19 19 21.2386 19 24C19 26.7614 21.2386 29 24 29Z"
        fill="currentColor"
      />
      <path
        d="M40 29C42.7614 29 45 26.7614 45 24C45 21.2386 42.7614 19 40 19C37.2386 19 35 21.2386 35 24C35 26.7614 37.2386 29 40 29Z"
        fill="currentColor"
      />
      <path
        d="M8 29C10.7614 29 13 26.7614 13 24C13 21.2386 10.7614 19 8 19C5.23858 19 3 21.2386 3 24C3 26.7614 5.23858 29 8 29Z"
        fill="currentColor"
      />
    </svg>
  );
};
