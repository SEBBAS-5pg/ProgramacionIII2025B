
export const Navbar =()=>{
    return(
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
            <span className="text-white">Home</span>

            <div className="flex flex-1"></div>
 
            <a href="/about" className="mr-2 text-white ">About</a>
            <a href="/contact" className="mr-2 text-white ">Contact</a>
            <a href="/pricing" className="mr-2 text-white ">Pricing</a>
        </nav>
    )
}