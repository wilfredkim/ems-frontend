import logo from './logo.svg';
import './App.css';
import ListEmployeeComponents from './components/ListEmployeeComponents'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'

function App() {
  return (
    <div>
      <HeaderComponent />
        <div className="container">
          <ListEmployeeComponents/>
        </div>
      <FooterComponent />
    </div>
  );
}

export default App;
