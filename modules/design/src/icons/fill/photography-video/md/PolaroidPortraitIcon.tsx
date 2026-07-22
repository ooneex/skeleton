import type { SVGProps } from "react";

export const PolaroidPortraitIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26 2C28.2091 2 30 3.79086 30 6L30 26C30 28.2091 28.2091 30 26 30H6C3.79086 30 2 28.2091 2 26V6C2 3.79086 3.79086 2 6 2H26ZM6 23L26 23L26 6L6 6L6 23Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 12.5C13.5 11.1193 14.6193 10 16 10C17.3807 10 18.5 11.1193 18.5 12.5C18.5 13.8807 17.3807 15 16 15C14.6193 15 13.5 13.8807 13.5 12.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M10.3046 21C11.2952 18.686 13.4285 17 16 17C18.5716 17 20.7048 18.686 21.6955 21H10.3046Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
