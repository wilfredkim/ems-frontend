import logo from './logo.svg';
import './App.css';
import ListEmployeeComponents from './components/ListEmployeeComponents'
import CreateEmployeeComponent from './components/CreateEmployeeComponent'
import ViewEmployeeComponent from './components/ViewEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div>
    <BrowserRouter>
        <HeaderComponent />
          <div className="container">
            <Routes>
              <Route path ="/" exact element ={<ListEmployeeComponents/>}></Route>
               <Route path ="/employees" element ={<ListEmployeeComponents/>}></Route>
               <Route path ="/addemployee/:id" element ={<CreateEmployeeComponent/>}></Route>   
               <Route path ="/view-employee/:id" element ={<ViewEmployeeComponent/>}></Route>   
            </Routes>
        
          </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
