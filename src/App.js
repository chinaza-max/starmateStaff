import './App.css';
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import { ThemeProvider } from './themeContext';

import DashBoard from "./Pages/DashBoad/DashBoad";
import Report from "./Pages/Report/Report";
import Settings from "./Pages/Settings/Settings";
import Transaction from "./Pages/Transaction/Transaction";
import Message from "./Pages/Message/Message";
import Container1 from './Layout/Container1/Container1';



function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Container1/>}>
            <Route path="/" element={<DashBoard/>}/>
            <Route path="/Report" element={<Report/>} />
            <Route path="/Message" element={<Message/>} />
            <Route path="/Settings" element={<Settings/>} />
            <Route path="/Transaction" element={<Transaction/>} /> 
          </Route>
          
        </Routes>
      </BrowserRouter>
   </ThemeProvider>
  );
}

export default App;
