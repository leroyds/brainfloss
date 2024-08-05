import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import './header.scss';

const Header = () => {
  const userRole = useSelector((state) => state.user.role);

  return (
    <header>
      <div className="header-right">
        {
          userRole === 'admin' ?
            <div>Admin Role Active</div>
            : <div>User Role Active</div>
        }
        <Button variant="outlined">Toggle User</Button>
      </div>
    </header>
  );
}
 
export default Header;