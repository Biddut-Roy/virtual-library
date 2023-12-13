import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAdmin from "../../Hooks/useAdmin";


const Navbar = () => {
  const [theme, setTheme] = useState('dark');
  const [padding, setPadding] = useState(false);
  const { user, logOut } = useAuth();
  const [isAdmin] = useAdmin();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);

  //  log out 
  const Out = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Log Out successfully',
          showConfirmButton: false,
          timer: 1500
        })
      }).catch((error) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${error.message}`,
          showConfirmButton: false,
          timer: 1500
        })
      });

  }

  const handelP = () => {
    setPadding(!padding)
  }
  const handelPx = () => {
    setPadding(false)
  }

  return (
    <div className={padding ? "navbar bg-base-100 mb-36 md:w-11/12 mx-auto lg:w-full" : "navbar bg-base-100 mx-auto md:w-11/12 lg:w-full"}>
      <div className="navbar-start">
        <div className="dropdown">
          <label onClick={handelP} tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          {
            isAdmin?.isAdmin ?
              <ul tabIndex={0} className="menu menu-sm bg-gray-700 dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                <li onClick={handelP} > <NavLink to={"/"}>Home</NavLink> </li>
                <li onClick={handelPx} > <NavLink to={"/addBook"}>Add Book</NavLink> </li>
                <li onClick={handelPx} > <NavLink to={"/allBook"}>All Books</NavLink> </li>
                <li onClick={handelPx} > <NavLink to={"/checkDonate"}>Give Books</NavLink> </li>
              </ul>
              :
              <ul tabIndex={0} className="menu menu-sm bg-gray-700 dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                <li onClick={handelP} > <NavLink to={"/"}>Home</NavLink> </li>
                <li onClick={handelPx} > <NavLink to={"/addBook"}>Add Book</NavLink> </li>
                <li onClick={handelPx} > <NavLink to={"/borrowed"}>Borrowed Books</NavLink></li>
                <li onClick={handelPx} > <NavLink to={"/donate"}>Donate</NavLink></li>
              </ul>
          }

        </div>
        <Link to={'/'} className="btn btn-ghost normal-case text-xl"><img className=" w-28 h-10" src="https://i.ibb.co/WzvggtD/logo.png" alt="Logo" /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">

        {
          isAdmin?.isAdmin ?
            <ul className="menu menu-horizontal px-1">
              <li> <NavLink to={"/"}>Home</NavLink> </li>
              <li> <NavLink to={"/addBook"}>Add Book</NavLink> </li>
              <li> <NavLink to={"/allBook"}>All Books</NavLink> </li>
              <li> <NavLink to={"/checkDonate"}>Give Books</NavLink> </li>
            </ul>
            :
            <ul className="menu menu-horizontal px-1">
              <li> <NavLink to={"/"}>Home</NavLink> </li>
              <li> <NavLink to={"/borrowed"}>Borrowed Books</NavLink></li>
              <li><NavLink to={"/donate"}>Donate</NavLink></li>
            </ul>
        }
      </div>
      <div className="navbar-end space-x-2">
        <div className="hidden md:flex lg:flex">
          <p>{user && user?.displayName}</p>
        </div>
        <div className=" w-10 h-10  ">
          <img className=" rounded-full" src={user ? user.photoURL : ``} alt="" />
        </div>
        {
          user ?
            <NavLink ><button onClick={Out} className=" btn btn-neutral">Log out</button></NavLink>
            :
            <NavLink to={"/login"}><button className=" btn btn-neutral">Login</button></NavLink>
        }
        <label className="swap swap-rotate">

          {/* this hidden checkbox controls the state */}
          <input onClick={toggleTheme} type="checkbox" />

          <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

          <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>


          {/* moon icon */}

        </label>
      </div>
    </div>
  );
};

export default Navbar;