import type { SVGProps } from "react";

export const ArcadeCharacterIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M23.5 12C23.5 13.3807 22.3807 14.5 21 14.5C19.6193 14.5 18.5 13.3807 18.5 12C18.5 10.6193 19.6193 9.5 21 9.5C22.3807 9.5 23.5 10.6193 23.5 12Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1C15.599 1 18.7946 2.72952 20.7998 5.39844L12 12L20.7998 18.6016C18.7946 21.2705 15.599 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM11 6.5C10.3096 6.5 9.75 7.05964 9.75 7.75C9.75 8.44036 10.3096 9 11 9C11.6904 9 12.25 8.44036 12.25 7.75C12.25 7.05964 11.6904 6.5 11 6.5Z"
        fill="currentColor"
      />
    </svg>
  );
};
