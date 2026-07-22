import type { SVGProps } from "react";

export const TagsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon
        points="28.879 14.293 16.586 2 4 2 4 0 17.414 0 30.293 12.879 28.879 14.293"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <path
        d="m27.586,16.172L15.414,4H2v13.414l12.172,12.172c.755.755,1.76,1.171,2.828,1.171s2.073-.416,2.828-1.171l7.758-7.758c1.559-1.56,1.559-4.097,0-5.656Zm-17.086-1.172c-1.381,0-2.5-1.119-2.5-2.5s1.119-2.5,2.5-2.5,2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
