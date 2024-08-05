import { TextField } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './search.scss'

const SearchBar = () => {
  return (
    <div className="search-container">
      <TextField id="outlined-basic" variant="outlined" className="search"/>
      <SearchOutlinedIcon/>
    </div>
  );
}
 
export default SearchBar;