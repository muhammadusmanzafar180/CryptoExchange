    // import logo from './logo.svg';
    import './App.css';
    import Router from './components/Router';
    import Navigation from './components/Navigation';
    import { useEffect, useState } from 'react';
    import Login from './components/Login';

    function App() {
      const [isLogIn,setIsLogin] = useState(false);
      const onSignIn = (status) =>{
        setIsLogin(status);
      }

      useEffect(()=>{
        if (localStorage.getItem('user')!=null) {
          setIsLogin(true);
        }else{
          setIsLogin(false);
        }
      },[]);
      return (
        <>
          {isLogIn ? <Router/> : <Login onSuccessSignIn={onSignIn}/>}
        </>
      );
    }

    export default App;



    // <div className="App">
    //       <header className="App-header">
    //         <img src={logo} className="App-logo" alt="logo" />
    //         <p>
    //           Edit <code>src/App.js</code> and save to reload.
    //         </p>
    //         <a
    //           className="App-link"
    //           href="https://reactjs.org"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Learn React
    //         </a>
    //       </header>
    //     </div>