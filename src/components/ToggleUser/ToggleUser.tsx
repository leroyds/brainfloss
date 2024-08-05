import { useDispatch } from "react-redux";
import { AppDispatch } from "../../utils/redux/appStore";
import { updateUser } from "../../utils/redux/slice/userSlice";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const ToggleUser = () => {
  const dispatch:AppDispatch = useDispatch()
  const navigate = useNavigate();
  const userRole = useSelector(state => state.user.role);

  useEffect(() => {
    if(userRole === 'admin') navigate('/admin');
    else if(userRole === 'user') navigate('/user');
  }, [userRole, navigate])

  async function fetchAndSetUser(){
    const response = await fetch('https://f2ed36a4mh.execute-api.ap-south-1.amazonaws.com/');
    const json = await response.json();
    dispatch(updateUser(json));
    if(json.user.role === 'admin') navigate('/admin');
    else if(json.user.role === 'user') navigate('/user');
  }
  return (
    <Button variant="outlined" onClick={fetchAndSetUser}>Toggle User</Button>
  );
}
 
export default ToggleUser;