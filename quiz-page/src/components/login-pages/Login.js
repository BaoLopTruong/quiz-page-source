import { useEffect, useState } from 'react';
import './login.css';
import {Link, useNavigate} from 'react-router-dom'
export default function Login() {
    const navigate = useNavigate();
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

    function login(){
        navigate("/")
    }

    return (
        // <div className='login'>
        //     <form>
        //     <h1>Login</h1>
        //         <div>
        //             <label style={{ marginRight: '100px' }}>User name:</label>
        //             <br></br>
        //             <input type='text'></input>
        //         </div>
        //         <br></br>
        //         <div>
        //             <label style={{ marginRight: '110px' }}>Password:</label>
        //             <br></br>
        //             <input type='password'></input>
        //         </div>
        //         <br></br>
        //         <div>
        //         <Link to="/signup" >
        //         You need create account
        //         </Link>
        //         </div>

              

        //         <div>
        //             <button onClick={login}>Login</button>
        //         </div>
        //     </form>
        // </div>
        <div className='login'>
        <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="row w-100 m-0">
            <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
              <div className="card col-lg-4 mx-auto">
                <div className="card-body px-5 py-5">
                  <h3 className="card-title text-left mb-3">Login</h3>
                  <form>
                    <div className="form-group">
                      <label>Username or email *</label>
                      {/* <input type="text" className="form-control p_input"> </input> */}
                      <input type='text' className="form-control p_input"></input>
                    </div>
                    <div className="form-group">
                      <label>Password *</label>
                      {/* <input type="text" className="form-control p_input"> </input> */}
                      <input type='password' className="form-control p_input"></input>
                    </div>
                    <div className="form-group d-flex align-items-center justify-content-between">
                      <div className="form-check">
                        <label className="form-check-label">
                          {/* <input type="checkbox" className="form-check-input"> Remember me </input> */}
                          <input type='checkbox' className= "form-check-input"></input> Remember me
                           </label>
                      </div>
                      {/* <a href="#" className="forgot-pass">Forgot password</a> */}
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary btn-block enter-btn">Login</button>
                    </div>
                    <div className="d-flex">
                      <button className="btn btn-facebook mr-2 col">
                        <i className="mdi mdi-facebook"></i> Facebook </button>
                      <button className="btn btn-google col">
                        <i className="mdi mdi-google-plus"></i> Google plus </button>
                    </div>
                    <p className="sign-up">Don't have an Account?<a href="#"> Sign Up</a></p>
                  </form>
                </div>
              </div>
            </div>
            {/* <!-- content-wrapper ends --> */}
          </div>
          {/* <!-- row ends --> */}
        </div>
        {/* <!-- page-body-wrapper ends --> */}
      </div>
    </div>
    );
}


