import type { SVGProps } from "react";

export const Flag2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M4.66367 4.55825L7.87911 3.40987C10.558 2.45311 13.5316 2.81917 15.8984 4.39709L15.9848 4.45467C17.4319 5.41937 19.1862 5.81086 20.9061 5.55288L29.7553 4.22551L25.118 13.5L29.5104 22.2846L21.2028 23.5308C18.9915 23.8624 16.7359 23.3591 14.8754 22.1188L14.789 22.0612C12.9481 20.8339 10.6354 20.5492 8.55178 21.2934L5.33634 22.4417L4.66367 4.55825Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M6 2V30H4V2H6Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
