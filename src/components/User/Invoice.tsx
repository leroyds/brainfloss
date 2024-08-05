import { Button } from "@mui/material";
import Card from "../Admin/elements/Card";
import InfoBar from "../utils/InfoBar/InfoBar";
import SearchBar from "../utils/SearchBar/SearchBar";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import './invoice.scss'

const data = [
  {title:"ABC123",  price:"15,232"},
  {title:"Asv123",  price:"17, 000"},
]

const Invoice = () => {
  return (
    <div className="invoice">
      <div className="invoice-row header">
        <span>invoices as of 05/07</span>
        <div className="right">
          <SearchBar/>
          <Button variant="contained" startIcon={<AddOutlinedIcon />}>
            New Invoices
          </Button>
        </div>
      </div>
      <div className="invoice-row top">
        <Card title="Paid Invoices">
          <h1>15</h1>
        </Card>
        <Card title="Due Invoices">
          <h1>13</h1>
        </Card>
        <Card title="Total Invoices">
          <h1>28</h1>
        </Card>
      </div>

      <Card title='Recently Paid Invoices'>
          {
            data && data.map((item) => (
              <InfoBar title={item.title} price={item.price}/>
            ))
          }
        </Card>
    </div>
  );
}
 
export default Invoice;