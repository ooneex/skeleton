import type { SVGProps } from "react";

export const CurrencyYenIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.397 2.77944L16 15.7002L6.60315 2.77943L8.22063 1.60309L16 12.2998L23.7795 1.60309L25.397 2.77944Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M17 13V31H15V13H17Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M7 14H25V16H7V14Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M7 20H25V22H7V20Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
