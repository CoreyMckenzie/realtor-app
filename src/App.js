import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //adding react router 
import Home from "./pages/Home"; //importing the page for our routes
import Offers from "./pages/Offers"; //importing the page for our routes
import SignUp from "./pages/SignUp"; //importing the page for our routes
import SignIn from "./pages/SignIn"; //importing the page for our routes
import Profile from "./pages/Profile"; //importing the page for our routes
import ForgotPassword from "./pages/ForgotPassword";//importing the page for our routes
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route> {/*Added a Route*/}
        <Route path="/offers" element={<Offers/>}></Route> {/*Adding a route*/}
        <Route path="/sign-up" element={<SignUp/>}></Route> {/*Adding a route*/}
        <Route path="/sign-in" element={<SignIn/>}></Route> {/*Adding a route*/}
        <Route path="/profile" element={<Profile/>}></Route> {/*Adding a route*/}
        <Route path="/forgot-password" element={<ForgotPassword/>}></Route> {/*Adding a route*/}
      </Routes>
    </Router>
  );
}

export default App;
