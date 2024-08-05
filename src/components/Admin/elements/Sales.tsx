import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { FC } from 'react';

interface SalesProps {
  num: string;
  isUp: boolean;
}

const Sales: FC<SalesProps> = ({num, isUp}) => {
  return (
    <div>
      ${num} {isUp ? <ArrowUpwardIcon/> : <ArrowDownwardIcon/>}
    </div>
  );
}
 
export default Sales;