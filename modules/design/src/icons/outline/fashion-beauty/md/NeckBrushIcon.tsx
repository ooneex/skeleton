import type { SVGProps } from "react";

export const NeckBrushIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M11 21H21" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M17.5 9L19 2.5L18.8846 3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M18.9883 16L25.4517 5.86021C25.7527 5.38793 25.6082 4.7584 25.1175 4.4885C22.3288 2.9548 19.1932 2 16 2C12.8069 2 9.67139 2.95474 6.88274 4.48838C6.39189 4.75832 6.24746 5.388 6.54868 5.86029L13.0156 16"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M20 16H12L10.4667 23.1554C9.71183 26.6781 12.3973 30 16 30C19.6027 30 22.2882 26.6781 21.5333 23.1554L20 16Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
