import type { SVGProps } from "react";

export const PerfumeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 4.18138C8.58937 4.80785 5.72921 7.0074 4.1994 10L3.70626 9.85556C2.16358 9.40369 1.37734 7.69155 2.03998 6.22698V6.22698C2.76872 4.61629 4.84207 4.16018 6.17949 5.31633L7.19816 6.19695"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M19 4H16H16.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M7 15H21" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M12 8.5V2H16V8.5" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M21 15C21 18.866 17.866 22 14 22C10.134 22 7 18.866 7 15C7 11.134 10.134 8 14 8C17.866 8 21 11.134 21 15Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
