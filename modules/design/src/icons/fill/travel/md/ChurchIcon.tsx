import type { SVGProps } from "react";

export const ChurchIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M17 0V10H15V0H17Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M12 3H20V5H12V3Z" fill="currentColor" />
      <path d="M30 21.4338L30 30H27V19.6338L30 21.4338Z" fill="currentColor" data-color="color-2" />
      <path d="M2 21.4338L2 30H5V19.6338L2 21.4338Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 7.8096L25 13.4346V30.1792H19V24C19 22.3431 17.6569 21 16 21C14.3431 21 13 22.3431 13 24V30.1792H7V13.4346L16 7.8096ZM14 14.5C14 13.3954 14.8954 12.5 16 12.5C17.1046 12.5 18 13.3954 18 14.5V17H14V14.5Z"
        fill="currentColor"
      />
    </svg>
  );
};
