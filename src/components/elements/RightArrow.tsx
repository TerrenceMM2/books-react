import type { FC } from "react";

export interface ArrowProps {
  onClick: (direction: string) => void;
}

const RightArrow: FC<ArrowProps> = ({ onClick }) => {
  return (
    <svg
      onClick={() => onClick("up")}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-12"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
};

export default RightArrow;
