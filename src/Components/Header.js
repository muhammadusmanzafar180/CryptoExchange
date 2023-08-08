    import { Link } from 'react-router-dom'
    import "./Header.css";

    function Header(props) {  
        return (
            <>
                <div>
                    <nav>
                        <ul className="headerStyling">
                            <li><Link to="/">Home</Link></li>
                            <li hidden={props.isLoggedIn}><Link to="/signup">Signup</Link></li>
                            <li hidden={props.isLoggedIn}><Link to="/login">Login</Link></li>
                            <li hidden={!props.isLoggedIn}><Link to="/crud">Crud (A2)</Link></li>
                            <li hidden={!props.isLoggedIn}><Link to="/dashboard">Dasboard</Link></li>
                            <li hidden={!props.isLoggedIn}><Link to="/logout">Logout</Link></li>
                        </ul>
                    </nav>
                </div>
            </>
        )
    }

    export default Header;