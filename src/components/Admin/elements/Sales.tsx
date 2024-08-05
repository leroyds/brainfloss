import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Sales = ({num, isUp}) => {
  return (
    <div>
      ${num} {isUp ? <ArrowUpwardIcon/> : <ArrowDownwardIcon/>}
    </div>
  );
}
 
export default Sales;