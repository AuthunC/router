import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Eg1-Basic Routing/Home';
import About from './Eg1-Basic Routing/About';
import Contact from './Eg1-Basic Routing/Contact';
import Services from './Eg2-Nested Routing/Services';
import Contact1 from './Eg3-Programmatic Routing/Contact1';
import Users from './Eg4-useParams() Routing/Users';
import UserDetail from './Eg4-useParams() Routing/UserDetail';
import Employee from './Eg5 - useParams with API/Employee';
import EmployeeDetail from './Eg5 - useParams with API/EmployeeDetail';

function App() {
  return (
    <div className='App'>
        <nav>
          <ul className='ul'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact1">Contact1</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/employee">Employees</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/*" element={<Services />} />
          <Route path="/contact1/*" element={<Contact1 />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetail />} />
          <Route path="/employee" element={<Employee/>} />
          <Route path="/employee/:id" element={<EmployeeDetail />} />
        </Routes>
        
      </div>
  );
}

export default App;
