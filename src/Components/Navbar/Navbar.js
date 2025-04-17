import { BiHome } from "react-icons/bi";
import { FcAbout } from "react-icons/fc";
import { IoCreate } from "react-icons/io5";
import { Link } from "react-router-dom";
import './navbarStyle.css'
export default function Navbar(){
    return(
        <div className="navbar-container flex">
            <div className="logo"><span>A</span>rticles</div>

            <div className="items flex">
                <Link to='/' className="link flex"><BiHome className='icon'/> Home</Link>
                <Link to='/create-article' className="link flex">< IoCreate className='icon'/> Create Yours </Link>
                <Link to='/about-us' className="link flex"><FcAbout className='icon'/> About</Link>
            </div>
        </div>
    )
}