import type { SVGProps } from "react";

export const AirbagIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M11.4738 15.5981L15.5 14.5L16.4901 10.2095C16.7886 8.91617 17.9403 8 19.2676 8C20.6903 8 21.7657 9.28853 21.5112 10.6883L20.5972 15.7155C20.2514 17.6175 18.5948 19 16.6617 19H13L12 24H10V17.5276C10 16.6257 10.6036 15.8354 11.4738 15.5981Z"
        fill="currentColor"
      />
      <path
        d="M19.5 6C18.1193 6 17 4.88071 17 3.5C17 2.11929 18.1193 1 19.5 1C20.8807 1 22 2.11929 22 3.5C22 4.88071 20.8807 6 19.5 6Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13C10.3137 13 13 10.3137 13 7Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
