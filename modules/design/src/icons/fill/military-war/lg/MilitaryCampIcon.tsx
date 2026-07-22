import type { SVGProps } from "react";

export const MilitaryCampIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M34 1V8H25.5V12H22.5V1H34Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 44H35.7129L35.4697 43.8477C30.419 40.6909 25.4857 33.4044 24 27.5723C22.5143 33.4044 17.581 40.6909 12.5303 43.8477L12.2871 44H4V22H44V44ZM9 33H15V27H9V33ZM33 33H39V27H33V33Z"
        fill="currentColor"
      />
      <path
        d="M38.3086 11.0078C41.4789 11.1684 44 13.7898 44 17V19H4V17C4 13.6863 6.68629 11 10 11H38L38.3086 11.0078Z"
        fill="currentColor"
      />
    </svg>
  );
};
