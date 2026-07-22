import type { SVGProps } from "react";

export const FileQuestionIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M20 9V4C20 2.89543 19.1046 2 18 2H11.0784C10.548 2 10.0393 2.21071 9.66421 2.58579L4.58579 7.66421C4.21071 8.03929 4 8.54799 4 9.07843L4 20C4 21.1046 4.89543 22 6 22H13"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M4 9H11V2" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" data-cap="butt" fill="none" />
      <path
        d="M17.5 24C18.1904 24 18.75 23.4404 18.75 22.75C18.75 22.0596 18.1904 21.5 17.5 21.5C16.8096 21.5 16.25 22.0596 16.25 22.75C16.25 23.4404 16.8096 24 17.5 24Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M17.5 19V19C17.5 18.6898 17.6628 18.4023 17.9287 18.2428L18.76 17.744C19.5293 17.2824 20 16.4511 20 15.554V15.554C20 14.1435 18.8565 13 17.446 13H17.3944C16.5233 13 15.7097 13.4354 15.2265 14.1603L15 14.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
