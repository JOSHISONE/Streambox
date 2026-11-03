import { NavLink, Link } from "react-router-dom";


function Logo() {
    return(

<header className="flex items-center justify-between bg-black text-gray-400 px-6 py-4">
         <div className="flex items-center gap-1">
            <Link to="/"><h2 className="logo-font text-xl font-semibold text-white">LOGO</h2></Link>  
         </div>
        <nav>
            <ul className="flex items-center gap-6">
               <li><NavLink to="/AboutUs" className={({isActive}) => isActive ? "text-gray-400 underline underline-offset-4" : "text-gray-400"}>About us</NavLink></li>
               <li>< NavLink to="/Portfolio" className="text-gray-400">Portfolio</NavLink></li>
               <li><NavLink to="/Services" className="text-gray-400">Services</NavLink></li>
               <li><NavLink to="/ContactUs" className={({isActive}) => isActive ? "inline-block rounded-full border-2 border-gray-500 px-4 py-2 text-lime-300" : "inline-block rounded-full border-2 border-lime-300 bg-lime-300 px-4 py-2 text-black"}>Contact us</NavLink></li>
            </ul>
        </nav>
        </header>
    )
}

export default Logo;