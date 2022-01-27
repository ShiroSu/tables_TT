import './App.css';
import Table from './Table';

function App() {
  return (
    <div className="App">
      <table border="1">
        <thead>
          <tr>
            <td>Section</td>
            <tr>
              <td>Groups</td>
              <td colSpan={3}>Price</td>
            </tr>
          </tr>
        </thead>
        <Table />
      </table>
    </div>
  );
}

export default App;
