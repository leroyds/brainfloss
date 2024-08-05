import { Button } from "@mui/material";
import './header.scss';
import { useSelector } from "react-redux";

const Header = ({fetchAndSetUser}) => {
  const userRole = useSelector((state) => state.user.role)
  return (
    <header>
      <div className="header-right">
        {
          userRole === 'admin' ?
            <div>Admin Role Active</div>
            : <div>User Role Active</div>
        }
        <Button variant="outlined" onClick={fetchAndSetUser}>Toggle User</Button>
      </div>
      <div className="header-left">
      {
          userRole === 'admin' ?
            <>
              <Button>Dashbord</Button>
              <Button>User Mangement</Button>
            </>
            : 
            <>
              <Button>Dashbord</Button>
              <Button>Invoice</Button>
            </>
        }
      </div>
    </header>
  );
}
 
export default Header;