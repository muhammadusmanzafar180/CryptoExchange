import { NavLink } from 'react-router-dom';
export default function Navigation() {
    const onSignOut = () => {
        localStorage.removeItem('user');
        window.location.reload(true);
    }
    return(
        <div>
            <NavLink to="/"><a className="nav-link" href="#">Home</a></NavLink>
            <NavLink to="/about"><a className="nav-link" href="#">About</a></NavLink>
            <NavLink to="/login"><button className="nav-link" onClick={onSignOut}>Sign out</button></NavLink>
        </div>
    )
}