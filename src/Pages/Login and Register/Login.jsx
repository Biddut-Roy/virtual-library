import Lottie from "lottie-react";
import lock from '../../../public/animation/lock.json'
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/Fc';


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { signInGoogle, login } = useAuth()
    const handelLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')

        login(email, password)
            .then((userCredential) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login Success',
                    showConfirmButton: false,
                    timer: 1500
                })
                  navigate(location?.state? location.state : "/" )
                console.log(userCredential);
            })
            .catch((error) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: `${error.message}`,
                    showConfirmButton: false,
                    timer: 1500
                })
                console.log(error.message);
            });
    }

    //  google log in
    const handelGoogleLogin = () => {
        signInGoogle()
            .then((result) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Google Log in success',
                    showConfirmButton: false,
                    timer: 1500
                })
                //   navigate(location?.state? location.state : "/" )
                console.log(result.user);
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
                    <Lottie className=" lg:ml-28 h-36 md:h-44 lg:h-96 w-10/12" animationData={lock} loop={true} />
                </div>
                <div className="card flex-shrink-0 lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelLogin} className="card-body">
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Login" />
                        </div>
                    </form>
                    <div onClick={handelGoogleLogin} className=" mx-auto mb-1 flex"><FcGoogle className=" w-16 h-16" /><span>Login</span></div>
                    <div className=" mb-10">
                        <p href="#" className="label-text-alt link link-hover mx-5">Do not have an account?<span className=" font-semibold text-xl  text-green-600"><Link to={"/register"}>Register</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;