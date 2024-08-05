import { FC, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  title: string;
  buttonComponent?: ReactNode;
  className?: string;
}

const Card: FC<CardProps> = ({children, title, buttonComponent, className}) => {
  return (
    <div className={`cards_container ${className}`}>
      <div className="cards_container__header">
        <h3>{title}</h3>
        {buttonComponent ? buttonComponent : ''}
      </div>
      {children}
    </div>
  );
}
 
export default Card;