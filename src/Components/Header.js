    import { useEffect, useState } from "react";
    import axios from 'axios';
    import { useLocation } from "react-router-dom";

    function Header(props) {
        useEffect(() => {
            console.log(props);
            console.log(id);
            console.log(d);
        }, [])
        const {state} = useLocation();
        const {id, d} = state;
        return (
            <>
                <p>Hello from Header File</p>
            </>
        )
    }

    export default Header;