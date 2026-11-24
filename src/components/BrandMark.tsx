interface BrandMarkProps {
  className?: string;
}

export function BrandMark({ className = 'w-7 h-7' }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="0.75"
        y="0.75"
        width="34.5"
        height="34.5"
        className="fill-accent stroke-accent"
        strokeWidth="1.5"
      />
      {/* Geometric D */}
      <path
        d="M6.75 10.5H11.5C14.8137 10.5 17.5 13.1863 17.5 16.5V19.5C17.5 22.8137 14.8137 25.5 11.5 25.5H6.75V10.5Z"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinejoin="miter"
      />
      {/* Geometric B */}
      <path
        d="M20.25 10.5H25.25C27.183 10.5 28.75 12.067 28.75 14C28.75 15.933 27.183 17.5 25.25 17.5H20.25V10.5Z"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinejoin="miter"
      />
      <path
        d="M20.25 17.5H25.75C27.8211 17.5 29.5 19.1789 29.5 21.25V21.75C29.5 23.8211 27.8211 25.5 25.75 25.5H20.25V17.5Z"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinejoin="miter"
      />
      <rect x="27.5" y="5.5" width="2.5" height="2.5" fill="#93BDD9" />
    </svg>
  );
}
