import Header from './Header';
import Login from './Login';

import Signup from './Signup';
import Footer from './Footer';

import { useState, useEffect } from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp() {

    const defaultUsers = [
        {
            name: "farjad",
            email: 'farjad@gmail.com',
            password: 'password',
            address: 'x-town',
            selectedFile: 'Test_File.pdf'
        }
    ]

    const [users, setUser] = useState(defaultUsers)
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        console.log('Loggedin', isLoggedIn);
    }, [isLoggedIn])


    const loggedInHandler = (flag) => {
        setIsLoggedIn(flag.isLoggedIn);
    }
    const addUserHandler = (user) => {
        setUser([...users, user])
        //array not updating on these console logs
        console.log(users)
        console.log(user)
    }
    return (
        <>
            <Header isLoggedIn={isLoggedIn} />
            <div className="border-bottom my-3"></div>
            <Login users={users} checkLogin={loggedInHandler} />
            <div className="border-bottom my-3"></div>
            <Signup addNewUser={addUserHandler} />
            <div className="border-bottom my-5"></div>
            <Footer />
        </>
    )
}

export default MyApp;