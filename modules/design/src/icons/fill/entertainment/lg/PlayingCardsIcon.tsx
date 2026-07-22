import type { SVGProps } from "react";

export const PlayingCardsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M43 6H46V42H43V6Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34 2C37.3137 2 40 4.68629 40 8V40C40 43.3137 37.3137 46 34 46H12C8.68629 46 6 43.3137 6 40V8C6 4.68629 8.68629 2 12 2H34ZM30 41H35V38H30V41ZM27.7744 16C25.7472 16 24.2329 17.2701 23 18.6953C21.7692 17.268 20.2528 16 18.2256 16C15.1495 16 12.6563 18.4906 12.6562 21.5625C12.6562 26.8169 20.7058 32.5496 23 33.584C25.2942 32.5496 33.3438 26.8169 33.3438 21.5625C33.3437 18.4906 30.8484 16 27.7744 16ZM11 7V10H16V7H11Z"
        fill="currentColor"
      />
    </svg>
  );
};
