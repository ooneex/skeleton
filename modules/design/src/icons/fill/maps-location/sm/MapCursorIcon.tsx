import type { SVGProps } from "react";

export const MapCursorIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M7 2.00562L1 4.31331V21.9561L7 19.6484V2.00562Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 11.345L23.8494 22.5121L18 20.8742L12.1506 22.5121L18 11.345Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M11.0125 20.3744L9 19.3681V1.63208L15 4.63208L15 12.762L11.0125 20.3744Z" fill="currentColor" />
      <path
        d="M17 9.61279C17.2987 9.44034 17.6422 9.34484 18 9.34484C18.744 9.34484 19.4265 9.75779 19.7717 10.4168L23 16.58V2.04395L17 4.35164L17 9.61279Z"
        fill="currentColor"
      />
    </svg>
  );
};
