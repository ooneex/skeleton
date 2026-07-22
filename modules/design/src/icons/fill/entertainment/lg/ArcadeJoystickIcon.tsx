import type { SVGProps } from "react";

export const ArcadeJoystickIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M22 15.5C25.5899 15.5 28.5 12.5899 28.5 9C28.5 5.41015 25.5899 2.5 22 2.5C18.4101 2.5 15.5 5.41015 15.5 9C15.5 12.5899 18.4101 15.5 22 15.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5 26C16.1193 26 15 27.1193 15 28.5C15 29.8807 16.1193 31 17.5 31H26.5C27.8807 31 29 29.8807 29 28.5C29 27.1193 27.8807 26 26.5 26V20H39.5234L43.9971 35H4.00781L8.47656 20H17.5V26ZM34 29V32H37.5V29H34Z"
        fill="currentColor"
      />
      <path d="M44 38C44 41.3137 41.3137 44 38 44H10C6.66754 44 4.08264 41.2644 4 38H44Z" fill="currentColor" />
      <path d="M20.5 15L23.5 15V29L20.5 29L20.5 15Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
