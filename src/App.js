  import './App.css';
  // import MyApp from './classComponent/myApp.jsx';
  //import MyApp from './functionalComponent/MyApp.jsx';
  import MyApp from './Components/MyApp';
  import MyApp2 from './Components/MyApp2';
  import * as React from "react";
  import {useState} from 'react';
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  import Header from "./Components/Header";
  import Login from "./Components/Login";
  import Signup from "./Components/Signup";
  import Dashboard from "./Components/Dashboard";
  import Logout from './Components/Logout';
  import SimpleForm from './Components/SimpleForm';
  import Home from './Components/Home';
  import Transfer from './Components/Transfer';
  import ProtectedRoute from "./ProtectedRoute";


  function App() {

  const defaultUsers = [
      {
          name: "farjad",
          email: 'farjad@gmail.com',
          password: 'password',
          address: 'x-town',
          selectedFile: 'Test_File.pdf'
      }
  ]

  const [users, setUsers] = useState(defaultUsers)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addUserHandler = (user) => {
    console.log(user)
    setUsers([...users, user])
    //array not updating on these console logs
    console.log(users)
    console.log(user)
  }

  const loggedInHandler = (flag) => {
    setIsLoggedIn(flag.isLoggedIn);
  }
    return (
      <div className="App">
        <Routes>
        <Route path="/" element={<Home isLoggedIn={false}/>} />
          <Route path="/signup" element={<Signup users={users} addNewUser={addUserHandler} isLoggedIn={isLoggedIn}/>} />
          <Route path="/login" element={<Login checkLogin={loggedInHandler} users={users} isLoggedIn={isLoggedIn}/>} />
          {/* <Route path="/dashboard" element={<Dashboard isLoggedIn={isLoggedIn}/>} /> */}
          <Route path="/dashboard" element={
            <ProtectedRoute isAllowed={isLoggedIn}>
            <Dashboard isLoggedIn={isLoggedIn} />
            </ProtectedRoute>} />
          <Route path="/transfer" element={
            <ProtectedRoute isAllowed={isLoggedIn}>
            <Transfer isLoggedIn={isLoggedIn} />
            </ProtectedRoute>} /> 
          <Route path="/crud" element={
            <ProtectedRoute isAllowed={isLoggedIn}>
              <SimpleForm isLoggedIn={isLoggedIn}/> 
              </ProtectedRoute>}
            />
          {/* <Route path="/logout" element={<Logout logoutUser={loggedInHandler}/>} />   */}
          <Route path="/logout" element={
              <ProtectedRoute isAllowed={isLoggedIn}>
                <Logout logoutUser={loggedInHandler}/>
              </ProtectedRoute>} 
            />
          <Route path="*" element={<Home isLoggedIn={false}/>} />  
        </Routes>
      </div>
    );
  }

  export default App;
