import type { SVGProps } from "react";

export const WineBottleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.0225 8.12305L14.4619 8.24023C16.6572 8.90239 18.0828 10.7801 18 13.0635V23H6V12.7988C6.04614 10.5274 7.62665 8.79863 9.74512 8.16309L9.97363 8.10547L9.98145 5H14.0156L14.0225 8.12305ZM8 18H16V14H8V18Z"
        fill="currentColor"
      />
      <path
        d="M12.5 0C13.3269 0.000238835 13.9979 0.669611 14 1.49609L14.0088 3H9.98926L9.99902 1.49414C10.0406 0.683157 10.6534 0.000267535 11.498 0H12.5Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
