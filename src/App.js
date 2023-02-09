/*Styles*/
import './App.css';

/*sections*/
import Sidebar from './Sections/Sidebar';
import Dashboard from './Pages/DashboardPage';

const App =() => {

  return (
    <div className='container'>
        <Sidebar />
        <Dashboard/>
      </div>
  );
}

export default App;
