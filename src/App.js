import {Route,Switch} from 'react-router-dom'
import Home from './pages/Home';
import AddRecord from './pages/AddRecord';
import EditRecord from './pages/EditRecord';
import DeleteRecord from './pages/DeleteRecord';


function App() {
  return (
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/addRecord"  component={AddRecord}/>
        <Route path="/editRecord"  component={EditRecord}/>
        <Route path="/deleteRecord"  component={DeleteRecord}/>
      </Switch>
  );
}

export default App;
