import { useContext } from "react";
import { AuthProvider } from "./components/Routes/MainLayout";
import { Link, Navigate, useNavigate } from "react-router-dom";

 
const Resister = () => {
  const Navigate = useNavigate()
    const {createUser} = useContext(AuthProvider)
    const handleFormResister = e =>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,email,password)
        createUser(email,password)
        .then(result =>{
            console.log(result)
            e.target.reset()
            Navigate("/")
            
        })
        .catch(error => console.log("ERROR", error.message))
    }
    return (
        <div className="hero ">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Resister now!</h1>  
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleFormResister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="User Name" className="input input-bordered" required />
              </div>
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
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Resister</button>
              </div>
              <div className='flex justify-center items-center font-bold hover:text-purple-500'>
              <Link to="/login">Login</Link>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    );
};

export default Resister;<h3>this is a resister page</h3>