import type { SVGProps } from "react";

export const PhoneRotaryIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m20.627,15.478l-4.627-6.478h-8l-4.627,6.478c-.242.339-.373.746-.373,1.162v2.359c0,1.105.895,2,2,2h14c1.105,0,2-.895,2-2v-2.359c0-.417-.13-.823-.373-1.162Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <circle
        cx="12"
        cy="15"
        r="2"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <path
        d="m20,9h1c.552,0,1-.448,1-1v-1.61c0-.866-.563-1.623-1.382-1.905-2.873-.99-5.746-1.485-8.618-1.485h0c-2.873,0-5.746.495-8.618,1.485-.819.282-1.382,1.039-1.382,1.905v1.61c0,.552.448,1,1,1h1"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <line
        x1="8"
        y1="9"
        x2="8"
        y2="7"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <line
        x1="16"
        y1="9"
        x2="16"
        y2="7"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
};
