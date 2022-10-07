import logo from './logo.svg';
import './App.css';
import ListEmployeeComponents from './components/ListEmployeeComponents'
import CreateEmployeeComponent from './components/CreateEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { createBrowserRouter, RouterProvider,BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div>
    <BrowserRouter>
        <HeaderComponent />
          <div className="container">
            <Routes>
              <Route path ="/" exact element ={<ListEmployeeComponents/>}></Route>
               <Route path ="/employees" element ={<ListEmployeeComponents/>}></Route>
               <Route path ="/addemployee" element ={<CreateEmployeeComponent/>}></Route>
            </Routes>
        
          </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
