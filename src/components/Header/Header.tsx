import { Button } from "@mui/material";
import './header.scss';
import ToggleUser from "../ToggleUser/ToggleUser";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../utils/redux/hooks";

const Header = () => {
  const userRole = useAppSelector((state) => state.user.role)
  const navigate = useNavigate()
  return (
    <header>
      <div className="header-right">
        {
          userRole === 'admin' ?
            <div>Admin Role Active</div>
            : <div>User Role Active</div>
        }
        <ToggleUser/>
        {/* <Button variant="outlined" onClick={fetchAndSetUser}>Toggle User</Button> */}
      </div>
      <div className="header-left">
      {
          userRole === 'admin' ?
            <>
              <Button onClick={()=>navigate('/admin')}>Dashbord</Button>
              <Button onClick={()=>navigate('/admin/management')}>User Mangement</Button>
            </>
            : 
            <>
              <Button onClick={()=>navigate('/user')}>Dashbord</Button>
              <Button onClick={()=>navigate('/user/invoice')}>Invoice</Button>
            </>
        }
      </div>
    </header>
  );
}
 
export default Header;