import Lottie from "lottie-react";
import register from '../../../public/animation/Registation.json'
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/Fc";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/Firebase.int";
import axios from "axios";




const Register = () => {
    const { signInGoogle, createUser } = useAuth()
    const [error, setError] = useState()
    const navigate = useNavigate();

    const handelRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const img = form.img.value;
        const body = {name , email, password, img}
        if (password.length < 6) {
            setError('Password must be at least 6 characters long.')
            return;
        }
          if (!/[A-Z]/.test(password)) {
            setError("Password must be 1 Uppercase latter")
            return;
        }
          if (!/[$&+,:;=?@#|'<>.^*()%!-]/.test(password)) {
            setError("Password must Special character")
            return;
        }

        createUser(email, password)
        .then(() => {
            updateProfile(auth.currentUser, {
                displayName:name, photoURL:img
              }).then(() => {
                axios.post('https://virtual-library-eight.vercel.app/user', body)
                  .then(res=>{
                    console.log(res);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your Registration Success',
                            showConfirmButton: false,
                            timer: 1500
                          })
                          navigate("/")
                    }  
                  })
                  .catch(error=>{
                    console.log(error);
                  });
               
              }).catch((error) => {
                console.log(error.message);
              });
            
          })
          .catch((error) => {
            console.log(error.message);
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: `${error.message}`,
                showConfirmButton: false,
                timer: 1500
              })
          });
          form.reset();
    }

     //  google log in
     const handelGoogleLogin = () => {
        signInGoogle()
            .then((result) => {
                axios.put('https://virtual-library-eight.vercel.app/users',{email : result?.user?.email} )
                  .then(res=>{
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your Registration Success',
                            showConfirmButton: false,
                            timer: 1500
                          })
                          navigate("/")
                    }  
                  })
                  .catch(error=>{
                    console.log(error);
                  });
            })
            .catch((error) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: `${error.message}`,
                    showConfirmButton: false,
                    timer: 1500
                })
            });
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:w-1/2 lg:text-left">
                    <Lottie className=" lg:ml-36 h-36 lg:h-2/6 w-10/12" animationData={register} loop={true} />
                </div>
                <div className="card flex-shrink-0 lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="full name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">img</span>
                            </label>
                            <input type="text" name="img" placeholder="img url" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Register" />
                        </div>
                    </form>
                    <div className=" text-center text-red-700 font-medium text-xl">
                        <p>{error}</p>
                    </div>
                    <div onClick={handelGoogleLogin} className=" mx-auto mb-1 flex"><FcGoogle className=" w-16 h-16" /><span>Login</span></div>
                    <div>
                        <p href="#" className="label-text-alt link link-hover mx-5">Already have a account?<span className=" font-semibold text-xl  text-green-600"><Link to={"/login"}>Log in</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;





