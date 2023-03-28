import './App.css';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import Dashboard from './components//pages/Dashboard';

function App() {
  return (
    <div className="App">
     <HomePage/>
     <LoginPage/>
     <SignupPage/>
     <Dashboard/>

    </div>
  );
}

export default App;
