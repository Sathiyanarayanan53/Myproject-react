import React from 'react'
import{FaFacebookSquare,
FaTwitter,
FaInstagram,
} from "react-icons/fa";

const lists=[
        {
            name:"Facebook",
            Icon:<FaFacebookSquare />,
            href:"www.facbook.com"
        },
        {
            name:"Twitter",
            Icon:<FaTwitter />,
            href:"www.facbook.com"
        },
        {
            name:"Instagram",
            Icon:<FaInstagram />,
            href:"LinkedIn.com"
        }
    ];
const Footer = () => {
    
    return (
        <footer className='bg-blue-900 text-center py-6'>
            <h3 className='font-semibold text-xl text-white mb-2'>&copy;2025 My Project,All Right Reserved.</h3>
            <ul className='text-blue-600 flex justify-center'>
                {lists.map(list=>(
                <li ><a href={list.href} className='px-2 flex items-center'>{list.Icon}{list.name}</a></li>
        ))}
        </ul>
        
        </footer>
    )
}

export default Footer