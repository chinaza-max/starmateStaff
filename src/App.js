import './App.css';
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import { ThemeProvider } from './themeContext';

import DashBoard from "./Pages/DashBoad/DashBoad";
import Report from "./Pages/Report/Report";
import Settings from "./Pages/Settings/Settings";
import Transaction from "./Pages/Transaction/Transaction";
import Message from "./Pages/Message/Message";
import Container1 from './Layout/Container1/Container1';
import Project from './Pages/Project/Project';
import Container2 from './Layout/Container2/Container2';
import Details from './Pages/Details/Details';
import Shifts from './Pages/Shifts/Shifts';
import Location from './Pages/Location/Location';





function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Container1/>}>
            <Route path="/" element={<DashBoard/>}/>
            <Route path="/Settings" element={<Settings/>} />
            <Route path="/Transaction" element={<Transaction/>} /> 
            <Route path="/Project" element={<Project/>} /> 
          </Route>

          <Route path="/" element={<Container2/>}>
            <Route path="/Report" element={<Report/>} />
            <Route path="/Message" element={<Message/>} />
          </Route>
          <Route path="/Project" element={<Container2/>}>
            <Route path="/Project/Details" element={<Details/>} />
            <Route path="/Project/Details/Shift" element={<Shifts/>} />
            <Route path="/Project/Details/location" element={<Location/>} />
          </Route>
          
        </Routes>
      </BrowserRouter>
   </ThemeProvider>
  );
}

export default App;
