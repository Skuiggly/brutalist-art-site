import Image from "next/image";

interface CardProps {
  className?: string;
  children?: React.ReactNode;
}

export const Card = ({ className, children }:CardProps) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

interface Props {
  className?: string;
  children: React.ReactNode;
}

const CardList = ({ className, children }:Props) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export default CardList