import { useState } from 'react'
import './signup.css';
export default function SignUp() {

    const [form, setForm] = useState({})

    function handleChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit() {
        const isValid = form.username && form.email && form.password && form.confirmPassword
        alert(isValid ? 'Sign in success!!!' : 'Please fill out the form!!!')
    }

    return (
        <div className='signup'>

            <form>
                <h1>Sign Up</h1>
                <div className="custom-input">
                    <label style={{ marginRight: '130px' }}>Username: </label>
                    <br></br>
                    <input name="username" value={form.username || ''} onChange={handleChange} />
                </div>
                <br></br>
                <div className="custom-input">
                    <label style={{ marginRight: '164px' }}>Email: </label>
                    <br></br>
                    <input name="email" value={form.email || ''} onChange={handleChange} />
                </div>
                <br></br>
                <div className="custom-input">
                    <label style={{ marginRight: '135px', marginBottom: '10px' }}>Password: </label>
                    <br></br>
                    <input type="password" name="password" value={form.password || ''} onChange={handleChange} />
                </div>
                <br></br>
                <div className="custom-input">
                    <label style={{ marginRight: '75px' }}>Confirm password: </label>
                    <br></br>
                    <input type="password" name="confirmPassword" value={form.confirmPassword || ''} onChange={handleChange} />
                </div>
                <br></br>
                <button type="button" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}