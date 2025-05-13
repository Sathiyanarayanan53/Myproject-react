import{FaHome,
    FaInfoCircle,
    FaServicestack,
    FaEnvelope,
} from "react-icons/fa"
function Navbar() {

    return (
        <nav className="bg-gray-900 text-white p-4">
            <div className="container flex items-center justify-between mx-auto">
                
            <h1 className="text-2xl font-bold ">🚀Myproject</h1>
            <ul className="flex space-x-5">
                <li><a href="" className="flex gap-1 items-center hover:text-blue-400"><FaHome />Home</a></li>
                <li><a href="" className="flex gap-1 items-center hover:text-blue-400"><FaInfoCircle/> About</a></li>
                <li>
                    <a href="" className="flex gap-1 items-center hover:text-blue-400"><FaServicestack />Service</a>
                </li>
                <li><a href="" className="flex gap-1 items-center hover:text-blue-400"><FaEnvelope/>Contact</a>
                </li>
            </ul>
            </div>
        </nav>
    );
}

export default Navbar;