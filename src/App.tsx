import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from "./components/Navigation";
import UsersPage from "./pages/UsersPage";
import PostsPage from "./pages/PostsPage";

function App() {
  return (
      <Router>
          <Navigation/>
          <Routes>
              <Route path="/" element={<UsersPage/>}/>
              <Route path="/pages" element={<PostsPage/>}/>
          </Routes>
      </Router>
  );
}

export default App;
