import * as React from "react"
import { SVGProps } from "react"

export const HamburgerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#0B0B0B"
      d="M25.5 21a1.5 1.5 0 0 1 .175 2.99L25.5 24h-24a1.5 1.5 0 0 1-.175-2.99L1.5 21h24Zm0-10.5a1.5 1.5 0 1 1 0 3h-24a1.5 1.5 0 1 1 0-3h24Zm0-10.5a1.5 1.5 0 0 1 0 3h-24a1.5 1.5 0 0 1 0-3h24Z"
    />
  </svg>
)

export const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={26}
      height={26}
      fill="none"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m1 25 12-12 12 12m0-24L12.998 13 1 1"
      />
    </svg>
  )