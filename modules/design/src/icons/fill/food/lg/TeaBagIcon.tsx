import type { SVGProps } from "react";

export const TeaBagIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M17.5 11.5459C17.5002 5.44552 22.4455 0.500236 28.5459 0.5C34.6652 0.5 39.619 5.47458 39.5928 11.5938L39.4932 34.5068L36.4932 34.4932L36.5928 11.5811C36.612 7.12367 33.0033 3.5 28.5459 3.5C24.1024 3.50024 20.5002 7.10238 20.5 11.5459V13.5H17.5V11.5459Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M44 33V44H32V33H44Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34 20.6973V30H32C30.3431 30 29 31.3431 29 33V44H4V20.6973L10.4648 11H27.5352L34 20.6973ZM14 20H24V17H14V20Z"
        fill="currentColor"
      />
    </svg>
  );
};
