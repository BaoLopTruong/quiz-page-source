import './navbar.css'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <ul>
                <li>
                <a className="active" href="#home"> 
                <i style={{color: 'white'}} className="bi bi-house"></i> Home</a>
                </li>
                <li>
                <a href="#news">
                <i className="bi bi-patch-question"></i> Quiz</a>
                </li>
                <li>
                <a href="#contact">
                <i className="bi bi-activity"></i> Activity</a>
                </li>
                <li><Link to={'/login'}>Login</Link></li>
                <li className='nav-notic'>
                <i className="bi bi-bell"></i> 
                </li>
                <li className='nav-account'>
                <button className='btn-account'> 
                <i className="bi bi-person-circle"></i> Account</button>
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

