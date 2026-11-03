import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import profile from '../src/assets/profile.jpg';
import { NavLink, Link } from "react-router-dom";

function NavBar(){
     return(
        <header className="flex items-center justify-between py-5 px-7 text-white bg-gray-800">
          <div className="flex items-center gap-0.5">
           <MdCheckBoxOutlineBlank className="text-amber-300" />
          <Link to= "/"><h2>Streambox.</h2></Link>
          </div>
          <nav >
            <ul className="flex items-center gap-7.5">
               <li><NavLink to="/Series" className={({isActive}) => isActive ? "text-gray-400" : "text-white"}>Series</NavLink></li>
               <li><NavLink to="/Movies" className={({isActive}) => isActive ? "text-gray-400" : "text-white"}>Movies</NavLink></li>
               <li><NavLink to="/Music" className={({isActive}) => isActive ? "text-gray-400" : "text-white"}>Music</NavLink></li>
               <li><NavLink to="/Sports" className={({isActive}) => isActive ? "text-gray-400" : "text-white"}>Sports</NavLink></li>
               <li><NavLink to="/Gaming" className={({isActive}) => isActive ? "text-gray-400" : "text-white"}>Gaming</NavLink></li>
           </ul>
          </nav>
          <div className="flex items-center gap-3.5">
         <div className= "bg-gray-500 p-2 rounded-2xl">
           <IoSearch />
        </div>
         <div className= "bg-gray-500 p-2 rounded-2xl">
           <IoMenu />
        </div>
           <img src={profile} alt="Profile Picture" className="w-7 h-7 rounded-2xl border-2 border-amber-300" />
          </div>
        </header>

     )
}

export default NavBar;