import './navbar.css'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <ul>
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#news">Quiz</a></li>
                <li><a href="#contact">Activity</a></li>
                <li><Link to={'/login'}>Login</Link></li>
                <li className='nav-account'>
                <button className='btn-account'>Account</button>
                <div className='nav-content'>
                <a href="#about">Dashboard</a>
                <a href="#about">Profile</a>
                <a href="#about">Logout</a>
                </div>
                
                </li>
            </ul>
        </div>
    )
}

