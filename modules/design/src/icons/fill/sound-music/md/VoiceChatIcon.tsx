import type { SVGProps } from "react";

export const VoiceChatIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 7C1 4.79086 2.79086 3 5 3H27C29.2091 3 31 4.79086 31 7V21C31 23.2091 29.2091 25 27 25H21.4684L16 31.562L10.5316 25H5C2.79086 25 1 23.2091 1 21V7ZM23 12V16H21V12H23ZM15 11H13V17H15V11ZM19 9L19 19H17L17 9L19 9ZM27 13H25V15.01H27V13ZM7 13V15.01H5V13H7ZM11 8H9L9 20H11L11 8Z"
        fill="currentColor"
      />
    </svg>
  );
};
