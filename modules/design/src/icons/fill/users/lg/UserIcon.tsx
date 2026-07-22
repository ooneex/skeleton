import type { SVGProps } from "react";

export const UserIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 40.0375C6 30.5723 14.1172 23 24 23C33.8828 23 42 30.5723 42 40.0375V40.7923L41.269 40.9647C29.759 43.6784 18.241 43.6784 6.73105 40.9647L6 40.7923V40.0375Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 12C16 7.58172 19.5817 4 24 4C28.4183 4 32 7.58172 32 12C32 16.4183 28.4183 20 24 20C19.5817 20 16 16.4183 16 12Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
