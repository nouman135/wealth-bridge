import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Dashboard from "./components/dashboard.component";
import Logout from "./components/logout.component";
import PostView from "./components/post/view.component";
import PostCreate from "./components/post/add.component"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/view-post/:id" element={ <PostView /> } />
          <Route path="/add-post/:id" element={ <PostCreate /> }/>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
