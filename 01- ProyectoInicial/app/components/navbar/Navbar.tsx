import { FileDirectoryIcon, HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from "../active-link/ActiveLink"


const navItems=[
    {path:'/about', text:'About', icon:'FileDirectoryIcon'},
    {path:'/contact', text:'Contact'},
    {path:'/pricing', text:'Pricing'}
]

export const Navbar =()=>{
    return(
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded text-white">
            
           <Link href="/" className="flex items-center">
           <HomeIcon className="mr-2"/>
            <span>Home</span>
           </Link>

            <div className="flex flex-1"></div>

            {
                navItems.map(navItem =>(
                   
                   //<Link key={navItem.path} href={navItem.path} className="mr-2">{navItem.text}</Link> 
                   <ActiveLink key={navItem.path} {...navItem}/>
                ))
            }
            
        </nav>
    )
}