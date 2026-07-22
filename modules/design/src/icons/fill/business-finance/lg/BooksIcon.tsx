import type { SVGProps } from "react";

export const BooksIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M5 4H17V35H5V4ZM9.5 23H12.5V10H9.5L9.5 23Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 11H29V39H17V11ZM21.5 30H24.5V17H21.5V30Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.7984 46.6035L28.3163 4.9628L40.2136 3.39648L45.6957 45.0372L33.7984 46.6035ZM35.1866 22.718L38.1609 22.3264L36.464 9.43765L33.4897 9.82923L35.1866 22.718Z"
        fill="currentColor"
      />
      <path d="M5 38H17V46H5V38Z" fill="currentColor" />
      <path d="M17 42H29V46H17V42Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
