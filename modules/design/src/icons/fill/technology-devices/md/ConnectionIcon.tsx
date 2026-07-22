import type { SVGProps } from "react";

export const ConnectionIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3C8.8203 3 3 8.8203 3 16C3 22.8432 8.28755 28.4515 15 28.9621V22H17V31H16C7.71573 31 1 24.2843 1 16C1 7.71573 7.71573 1 16 1C24.2843 1 31 7.71573 31 16C31 21.0982 28.4557 25.6019 24.5721 28.3108L23.7519 28.8829L22.6077 27.2425L23.4279 26.6704C26.7982 24.3195 29 20.4168 29 16C29 8.8203 23.1797 3 16 3Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M14 8L14 14L12 14L12 8L14 8Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M20 8L20 14L18 14L18 8L20 8Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 17C23 20.866 19.866 24 16 24C12.134 24 9 20.866 9 17L9 12L23 12L23 17Z"
        fill="currentColor"
      />
    </svg>
  );
};
