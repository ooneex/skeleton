import type { SVGProps } from "react";

export const AudioJackIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M25 6H31V8H25V6Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 13C2 9.13401 5.134 6 9 6H11.6667V8H9C6.23857 8 4 10.2386 4 13C4 15.7614 6.23858 18 9 18H24C27.3137 18 30 20.6863 30 24C30 27.3137 27.3137 30 24 30H7V28H24C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20H9C5.13401 20 2 16.866 2 13Z"
        fill="currentColor"
      />
      <path
        d="M14 3C11.7909 3 10 4.79086 10 7C10 9.20914 11.7909 11 14 11H20V3H14Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M22 3V11H27V3H22Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
