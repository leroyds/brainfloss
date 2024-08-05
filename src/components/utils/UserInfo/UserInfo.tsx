import UserIcon from "./UserIcon.tsx";
import './user-info.scss'

const UserInfo = ({name='Leroy'}) => {
  return (
    <div className='userInfo'>
      <UserIcon/>
      <span className="userInfo__name">{name}</span>

      <div className="userInfo__right">
        <span>blah blah</span>
        <span>blah blah</span>
        <span>blah blah</span>
        <span>blah blah</span>
      </div>
    </div>
  );
}
 
export default UserInfo;