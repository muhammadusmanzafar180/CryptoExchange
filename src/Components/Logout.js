    import Header from './Header';
    import { useEffect } from "react";

    function Logout(props) {
        useEffect(()=> {
            props.logoutUser({ isLoggedIn: false });
        },)
    
        return (
            <>
            <Header isLoggedIn={false} />
            <p>Hello from Logout</p>
            </>
        )
    }

    export default Logout;