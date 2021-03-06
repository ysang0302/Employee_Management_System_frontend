import logo from './logo.svg';
import './App.css';
import {BrowerRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <HeaderComponent />
      <div className="container">
        <ListEmployeeComponent />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
