import { useSelector } from "react-redux";
import Chart from "../Admin/elements/Chart";
import Card from "../Admin/elements/Card";
import Notifications from "../utils/Notifications";
import InfoBar from "../utils/InfoBar/InfoBar";
import './user.scss';

const data = [
  {title:"ABC123", time:"18:41", price:"15,232"},
  {title:"Asv123", time:"12:21", price:"17, 000"},
  {title:"CBHGUY", time:"08:41", price:"8,232"},
]

const User = () => {

  const userName = useSelector((state) => state.user.username)
  return (
    <div className="user">
      <div>
        <span>Hi {userName}</span>
      </div>
      <div className="user-row top">
        <Card title='Sales' className="chart">
          <Chart/>
        </Card>
        <Card title='Notifications'>
          <Notifications/>
        </Card>
      </div>
      <div className="user-row bottom">
        <Card title='Recently Paid Invoices'>
          {
            data && data.map((item) => (
              <InfoBar title={item.title} time={item.time} price={item.price}/>
            ))
          }
        </Card>
      </div>
    </div>
  );
}
 
export default User;