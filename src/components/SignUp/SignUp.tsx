import { TextField } from '@mui/material';
import img from '../../../public/leaf.webp';
import googleImg from '../../../public/google-icon.webp';
import appleImg from '../../../public/apple.jpg';
import PasswordField from './elements/PasswordField';
import LoginBtn from '../ToggleUser/LoginBtn';
import './signup.scss'

const SignUp = () => {
  return (
    <div className='signup'>
      <img className='signup__image' alt="signup-image" src={img}/>
      <div className='form-right'>
        <h2>Welcome Again</h2>
        <small>Click login button to access User/Admin</small>
        <TextField
          required
          id="outlined-required"
          label="Email"
          style={{width: '100%'}}
        />
        <PasswordField/>
        <LoginBtn/>
        <div className='social-container'>
          <h6>OR</h6>
          <div className='social-login-btns'>
            <img src={googleImg}/>
            <img src={appleImg}/>
          </div>
        </div>
      </div>
      </div>
  );
}
 
export default SignUp;