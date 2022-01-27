import { Table } from 'react-bootstrap';
import MyTable from './Table';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <table width="80%">
        <thead>
          <tr>
            <td>Section</td>
            <td>Groups</td>
            <td>Price</td>
          </tr>
        </thead>
        <MyTable />
      </table>
    </div>
  );
}

export default App;
