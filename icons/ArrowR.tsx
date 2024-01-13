import * as React from "react";
import { SVGProps } from "react";
export const ArrowR = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <path
      stroke="#00683D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3.328}
      d="M2.091 17.24 23.043 7.057m0 0L7.476 1.673m15.567 5.384-5.385 15.567"
    />
  </svg>
);

export const ArrowBtn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={57}
    height={46}
    fill="none"
    {...props}
  >
    <path fill="#00683D" d="M57 0H0v46h57z" />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m23.06 26.416 12.591-6.12m0 0-9.355-3.236m9.355 3.236-3.236 9.356"
    />
  </svg>
);

export const ArrowRMobile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={7}
    height={7}
    fill="none"
    {...props}
  >
    <path
      stroke="#00683D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.824}
      d="M.55 5.228 5.74 2.707m0 0L1.884 1.374M5.74 2.707 4.406 6.562"
    />
  </svg>
)

export const BackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={70}
    height={70}
    fill="none"
    {...props}
  >
    <circle cx={35} cy={35} r={35} fill="#fff" />
    <path
      fill="#00683D"
      d="M43.712 51.516a2.602 2.602 0 0 0 .139-3.68L31.609 34.855 43.85 21.874a2.603 2.603 0 1 0-3.818-3.54l-13.884 14.75a2.604 2.604 0 0 0 0 3.541l13.884 14.752a2.605 2.605 0 0 0 3.68.139Z"
    />
  </svg>
)