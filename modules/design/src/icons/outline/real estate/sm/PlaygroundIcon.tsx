import type { SVGProps } from "react";

export const PlaygroundIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M3 13H13" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M3 18H13" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M13 13H14.617C16.3387 13 17.8672 14.1017 18.4117 15.7351L19.7094 19.6283C20.1816 21.0447 21.507 22 23 22V22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M3 22V6L8 2L13 6V22" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M8 10C8.82843 10 9.5 9.32843 9.5 8.5C9.5 7.67157 8.82843 7 8 7C7.17157 7 6.5 7.67157 6.5 8.5C6.5 9.32843 7.17157 10 8 10Z"
        fill="currentColor"
        data-cap="butt"
        data-stroke="none"
      />
    </svg>
  );
};
