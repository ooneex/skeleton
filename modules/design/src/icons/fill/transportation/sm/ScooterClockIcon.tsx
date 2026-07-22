import type { SVGProps } from "react";

export const ScooterClockIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M6 0C2.691 0 0 2.691 0 6C0 9.309 2.691 12 6 12C9.309 12 12 9.309 12 6C12 2.691 9.309 0 6 0ZM8 9.414L5 6.414V2.5H7V5.586L9.414 8L8 9.414Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M16.5 20H8V18H16.5V20Z" fill="currentColor" />
      <path
        d="M3 22.5C4.38071 22.5 5.5 21.3807 5.5 20C5.5 18.6193 4.38071 17.5 3 17.5C1.61929 17.5 0.5 18.6193 0.5 20C0.5 21.3807 1.61929 22.5 3 22.5Z"
        fill="currentColor"
      />
      <path
        d="M21 22.5C22.3807 22.5 23.5 21.3807 23.5 20C23.5 18.6193 22.3807 17.5 21 17.5C19.6193 17.5 18.5 18.6193 18.5 20C18.5 21.3807 19.6193 22.5 21 22.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 5H16.2099C17.7386 5 19.0228 6.14941 19.1916 7.6687L20.0304 15.2182L16.0744 22H7V20C7 17.7909 5.20914 16 3 16H2V14H3C6.31371 14 9 16.6863 9 20H14.9256L17.9696 14.7818L17.2038 7.88957C17.1475 7.38314 16.7195 7 16.2099 7H15V5Z"
        fill="currentColor"
      />
    </svg>
  );
};
