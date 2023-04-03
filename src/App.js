import './App.css';
import AddEmployee from './components/AddEmployee';
import EmployeeList from "./components/EmployeeList"
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <h1>hello world...</h1> */}
      <Router>
        <Routes>
          <Route path='/' element={<EmployeeList />}/>
          <Route path='/addEmployee' element={<AddEmployee />}/>
        </Routes>
      </Router>
      
    </div>
  );
};




export default App;
