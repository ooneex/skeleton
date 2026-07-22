import type { SVGProps } from "react";

export const SinkIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 12H31V17H28V15H23V12Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 7C15 4.23858 17.2386 2 20 2C22.7614 2 25 4.23858 25 7V22H22V7C22 5.89543 21.1046 5 20 5C18.8954 5 18 5.89543 18 7V11H15V7Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 22L44 22.6256C44 23.8611 43.1798 24.942 41.999 25.2794C41.9043 33.4255 35.2713 40 27.1028 40L20.8972 40C12.7287 40 6.09566 33.4255 6.00103 25.2794C4.82024 24.942 4 23.8611 4 22.6256L4 22C4 20.3431 5.34315 19 7 19L41 19C42.6569 19 44 20.3432 44 22Z"
        fill="currentColor"
      />
      <path d="M30 43V46H18V43C22 43 26 43 30 43Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M14 8H18V11H14V8Z" fill="currentColor" />
    </svg>
  );
};
