import { FC } from "react";
import './info-bar.scss'

interface InfoBarProps {
  title: string;
  price: string;
  time?: string;
}

const InfoBar: FC<InfoBarProps> = ({title, price, time}) => {
  return (
    <div className="info-bar">
      <span className="title">{title}</span>
      <div className="info-bar__meta">
        {
          time &&   
          <span className="time">{time}</span>
        }
        <span className="price">${price}</span>
      </div>
    </div>
  );
}
 
export default InfoBar;