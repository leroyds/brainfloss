import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../utils/redux/appStore";
import { updateUser } from "../../utils/redux/slice/userSlice";
import Admin from "../Admin/Admin";
import Header from "../Header/Header";
import './home.scss';

const Home = () => {
  const dispatch: AppDispatch = useDispatch();


  useEffect(() => {
    fetchAndSetUser()
  }, [])

  async function fetchAndSetUser(){
    const response = await fetch('https://f2ed36a4mh.execute-api.ap-south-1.amazonaws.com/');
    const json = await response.json();
    dispatch(updateUser(json));
  }

  return (
    <div>
      <Header/>
      <div className="container">
        <Admin/>
      </div>
    </div>
  );
}
 
export default Home;