import * as React from "react"
import { SVGProps } from "react"
export const PersonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    {...props}
  >
    <rect
      width={54}
      height={54}
      x={1}
      y={1}
      stroke="#00683D"
      strokeWidth={2}
      rx={4}
    />
    <path
      stroke="#00683D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M26.199 29.333c3.617 0 6.55-2.984 6.55-6.666 0-3.682-2.933-6.667-6.55-6.667-3.618 0-6.55 2.985-6.55 6.667s2.932 6.666 6.55 6.666ZM36.678 40c0-2.829-1.104-5.542-3.07-7.542-1.964-2-4.63-3.125-7.41-3.125-2.779 0-5.444 1.124-7.41 3.125-1.965 2-3.069 4.713-3.069 7.542"
    />
  </svg>
)

