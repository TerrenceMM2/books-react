import { FC, ReactNode } from "react";

interface TextProps {
  className?: string;
  children: ReactNode;
}

const Text: FC<TextProps> = ({ className, children }) => {
  return <span className={className}>{children}</span>;
};

export default Text;
