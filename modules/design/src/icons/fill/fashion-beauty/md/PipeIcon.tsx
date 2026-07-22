import type { SVGProps } from "react";

export const PipeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M30.4997 3C30.7759 3 30.9997 3.22386 30.9997 3.5V6.5C30.9997 6.77614 30.7759 7 30.4997 7H27.9997C25.7907 7.00015 23.9997 8.79096 23.9997 11V18.0732C23.9997 24.1076 19.1083 28.9998 13.0739 29C6.60962 29 1.20122 23.4186 1.84444 16.9863L2.04268 15H13.9997V17.5C13.9997 18.3283 14.6714 18.9998 15.4997 19C16.3281 19 16.9997 18.3284 16.9997 17.5V12C16.9997 7.02953 21.0293 3.00015 25.9997 3H30.4997Z"
        fill="currentColor"
      />
      <path d="M13.9997 13H2.24287L2.64229 9H13.9997V13Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
