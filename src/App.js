import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login.component";
import RMLogin from "./components/RMlogin.component";
import SignUp from "./components/signup.component";
import Dashboard from "./components/dashboard.component";
import RMdashboard from "./components/RMdashboard.component";
import Logout from "./components/logout.component";
import PostCreate from "./components/post/add.component";
import ViewPost from "./components/post/view.component";
import HomePage from "./pages/home.page";
import Clients from "./components/clients.component";
import PostedIdea from "./components/PostedIdea.component";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/RMlogin" element={<RMLogin />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/view-post/:id" element={<ViewPost />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/RMdashboard" element={<RMdashboard />} />
          <Route path="/Clients" element={<Clients />} />
          <Route path="/PostedIdea" element={<PostedIdea />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/add-post/:id" element={<PostCreate />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
