import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthProvider } from './Routes/MainLayout';

const Login = () => {
  const Navigate =  useNavigate()
const {userLogin,singInWithGoogle} = useContext(AuthProvider)
const handleFormSubmit = (e)=>{
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password)
    userLogin(email,password) 
    .then(result => {
        console.log(result.user)
        e.target.reset()
        Navigate("/")
    })
    .catch(error => console.log(error))
     
}
const handleGoogleSignIn = () =>{
  singInWithGoogle()
  .then(result =>{
    console.log(result.user)
    Navigate("/")
  })
  .catch(error =>{
    console.log(error)
  })
}
    return (
        <div className="hero ">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-3xl font-bold">Login now!</h1>  
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleFormSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div className='flex justify-center items-center hover:bg-purple-500'>
       <Link to="/resister">Resister Now </Link>
       </div>
       <button onClick={handleGoogleSignIn} className='hover:text-purple-600 font-bold'>google Login</button>
      </form>
      
    </div>
  </div>
</div>
    );
};

export default Login;<h3>this is login page</h3>