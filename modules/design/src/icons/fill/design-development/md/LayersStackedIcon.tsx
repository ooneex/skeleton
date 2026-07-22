import type { SVGProps } from "react";

export const LayersStackedIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon points="5.382 3 .382 13 26.618 13 31.618 3 5.382 3" strokeWidth="0" fill="currentColor" />
      <path
        d="m28.407,21.895c-.339.677-1.031,1.105-1.789,1.105H3.382L.382,29h26.236l5-10h-1.764l-1.447,2.895Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="m28.407,13.895c-.339.677-1.031,1.105-1.789,1.105H3.382L.382,21h26.236l5-10h-1.764l-1.447,2.895Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
