import type { SVGProps } from "react";

export const StampIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M4 25V30H28V25" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M2 21.2914V25H30V21.2914C30 19.9385 29.0945 18.7531 27.7894 18.3971L19 16V7L21.8944 5.55279C22.572 5.214 23 4.52148 23 3.76393V1H9V3.76393C9 4.52148 9.428 5.214 10.1056 5.55279L13 7V16L4.21065 18.3971C2.90546 18.7531 2 19.9385 2 21.2914Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
