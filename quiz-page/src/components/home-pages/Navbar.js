import './navbar.css'

export default function Navbar() {
    return (
        <div>
            <ul>
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#news">Quiz</a></li>
                <li><a href="#contact">Activity</a></li>
                <li className='nav-account'>
                <button className='btn-account'>Account</button>
                <div className='nav-content'>
                <a href="#about">Dashboard</a>
                <a href="#about">Profile</a>
                <a href="#about">Logout</a>
                </div>
                {/* <a href="#about">Account</a> */}
                </li>
            </ul>
        </div>
    )
}

