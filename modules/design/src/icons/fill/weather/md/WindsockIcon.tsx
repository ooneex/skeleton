import type { SVGProps } from "react";

export const WindsockIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M23 20.1635L17 21.3879L17 6.61203L23 7.83652L23 20.1635Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M6 2V30H4V2H6Z" fill="currentColor" data-color="color-2" />
      <path d="M25 19.7553L31 18.5308V9.46918L25 8.24469V19.7553Z" fill="currentColor" />
      <path d="M8 4.7753L15 6.20387L15 21.7961L8 23.2247V4.7753Z" fill="currentColor" />
    </svg>
  );
};
