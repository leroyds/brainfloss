import { useDispatch } from "react-redux";
import { AppDispatch } from "../../utils/redux/appStore";
import { updateUser } from "../../utils/redux/slice/userSlice";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAppSelector } from "../../utils/redux/hooks";

const LoginBtn = () => {
  const dispatch:AppDispatch = useDispatch()
  const navigate = useNavigate();
  const userRole = useAppSelector(state => state.user.role);

  useEffect(() => {
    if(userRole === 'admin') navigate('/admin');
    else if(userRole === 'user') navigate('/user');
  }, [userRole, navigate])

  async function fetchAndSetUser(){
    const response = await fetch('https://f2ed36a4mh.execute-api.ap-south-1.amazonaws.com/');
    const json = await response.json();
    dispatch(updateUser(json));
  }
  return (
    <Button variant="contained" onClick={fetchAndSetUser}>Login</Button>
  );
}
 
export default LoginBtn;