import type { SVGProps } from "react";

export const ItineraryIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 4C6.44772 4 6 4.44772 6 5V13H4V5C4 3.34315 5.34315 2 7 2H9.20991C10.7386 2 12.0228 3.14941 12.1916 4.66871L13.7962 19.1104C13.8525 19.6169 14.2805 20 14.7901 20H17C17.5523 20 18 19.5523 18 19V11H20V19C20 20.6569 18.6569 22 17 22H14.7901C13.2614 22 11.9772 20.8506 11.8084 19.3313L10.2038 4.88957C10.1475 4.38314 9.71946 4 9.20991 4H7Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M1 15H9V23H1V15Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M15 1H23V9H15V1Z" fill="currentColor" />
    </svg>
  );
};
