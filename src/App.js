import React,{useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.js';
import Teams from './components/Teams/Teams.js';
import About from './components/About/About.js';
import Home from './components/Home/Home.js';
import Sidebar from './components/Sidebar/Sidebar';
import Introduction from './components/Introduction/Introduction';
import Team from './components/Teams/Team/Team';

const frontend_employees = [
  {
    id: 1,
    name: 'John Doe',
    position: 'React Developer',
    email: 'john.doe@example.com',
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Frontend Architect',
    email: 'jane.smith@example.com',
  },
  {
    id: 3,
    name: 'Michael Johnson',
    position: 'React Developer',
    email: 'michael.johnson@example.com',
  },
  {
    id: 4,
    name: 'Emily Davis',
    position: 'Frontend Developer',
    email: 'emily.davis@example.com',
  },
];

const backend_employees = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    position: 'Backend Developer'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    position: 'Backend Engineer'
  },
  {
    id: 3,
    name: 'Michael Johnson',
    email: 'michael.johnson@example.com',
    position: 'Backend Architect'
  }
];
const devops_employees = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    position: 'Backend Developer'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    position: 'Backend Engineer'
  },
  {
    id: 3,
    name: 'Michael Johnson',
    email: 'michael.johnson@example.com',
    position: 'Backend Architect'
  },
  {
    id: 4,
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    position: 'DevOps Engineer'
  },
  {
    id: 5,
    name: 'David Brown',
    email: 'david.brown@example.com',
    position: 'DevOps Specialist'
  },
  {
    id: 6,
    name: 'Emily Wilson',
    email: 'emily.wilson@example.com',
    position: 'DevOps Architect'
  },
  {
    id: 7,
    name: 'Alex Green',
    email: 'alex.green@example.com',
    position: 'Frontend Developer'
  },
  {
    id: 8,
    name: 'Olivia Davis',
    email: 'olivia.davis@example.com',
    position: 'Frontend Engineer'
  }
];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
          <div className="home">
            <BrowserRouter>
                <Header isOpen={isOpen} setIsOpen={setIsOpen} />
                {isOpen && <Sidebar setIsOpen={setIsOpen} />}
                <div className="HomeContainer">
                <Routes>
                  <Route path='/' exact element={<Home/>} />
                  <Route path='/introduction' exact element={<Introduction/>} />
                  <Route path='/teams' exact element={<Teams/>} />
                  <Route path='/about' exact element={<About/>} />
                  <Route path='/frontend' exact element={<Team employees={frontend_employees}/>} />
                  <Route path='/backend' exact element={<Team employees={backend_employees}/>} />
                  <Route path='/devops' exact element={<Team employees={devops_employees}/>} />
              </Routes>
                </div>
            </BrowserRouter>
            </div>
  );
}

export default App;
