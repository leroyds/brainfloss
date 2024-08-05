import { Button } from "@mui/material";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import UserInfo from "../../utils/UserInfo/UserInfo";
import './man.scss'


const Management = () => {
  return (
    <div className="management">
      <div className="mang-row">
        <h1>User Management</h1>
        <Button variant="contained" startIcon={<AddOutlinedIcon />}>
          Add New User
        </Button>
      </div>
      <div className="mang-user-container">
        <UserInfo/>
        <UserInfo/>
        <UserInfo/>
        <UserInfo/>
        <UserInfo/>
        <UserInfo/>
      </div>
    </div>
  );
}
 
export default Management;