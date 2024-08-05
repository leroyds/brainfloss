import { useSelector } from "react-redux";
import Card from "./elements/Card.js";
import Sales from "./elements/Sales.js";
import Pie from "./elements/PieChart.js";
import Chart from "./elements/Chart.js";
import './admin.scss'

const Admin = () => {

  const adminName = useSelector((state) => state.user.username)
  return (
    <div className="admin">
      <p>Hey Admin: {adminName}</p>
      <div className="admin-dashboard__top-row">
        <Card title='User distribution'>
          <Pie/>
        </Card>
          
        <Card title="Today's Sale" className="mini">
          <Sales num="15,000" isUp/>
        </Card>

        <Card title="Total Customers">
          <Sales num="12,000" isUp={false}/>
        </Card>
      </div>
      <div className="admin-dashboard__bottom-row">
        <Card 
          title="Sales Report"
          buttonComponent={null}
        >
          <Chart/>
        </Card>
      </div>
    </div>
  );
}
 
export default Admin;