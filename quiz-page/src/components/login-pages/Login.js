import { useEffect, useState } from 'react';
import './login.css';
import {Link} from 'react-router-dom'
export default function Login() {

    const MESSAGE_ERROR = {
        email: 'Email error',
        password: 'Password error'
    }

    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/
    }

    const [form, setForm] = useState({})

    function handleChange(event) {
        let error = REGEX[event.target.name].test(event.target.value) ? '' : MESSAGE_ERROR[event.target.name]
        setForm({
            ...form,
            [event.target.name]: { value: event.target.value, error: error }
        })
    }

    function handleSubmit() {
        const isValid = form.email.value && form.password.value
        const isError = form.email.error || form.password.error
        alert(isValid && isError ? 'Login in success!!!' : 'Please fill out the form!!!')
    }
    useEffect(() => {
        console.log(form);
    })


    return (
        <div className='login'>
            <form>
            <h1>Login</h1>
                <div>
                    <label style={{ marginRight: '100px' }}>User name:</label>
                    <br></br>
                    <input type='text'></input>
                </div>
                <br></br>
                <div>
                    <label style={{ marginRight: '110px' }}>Password:</label>
                    <br></br>
                    <input type='password'></input>
                </div>
                <br></br>
                <div>
                <Link to="/signup" >
                You need create account
                </Link>
                </div>

              

                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
}


