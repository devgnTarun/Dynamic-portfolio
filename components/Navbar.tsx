import Link from "next/link"
import { Orbitron } from "next/font/google"

const orbitron = Orbitron({subsets : ['latin'], weight : ["400" , "500" , "700", "800"]})
const Navbar = () => {
    
    return (
        <nav className="w-full max-w-[1200px] mx-auto h-[60px] flex items-center justify-between">
            <div >
                <Link href={'/'} className={`text-2xl text-white ${orbitron.className}`}>Tarun Devgan</Link>
            </div>

            <div className="flex items-center justify-center ">
                <div className="list flex items-center gap-4 ">
                    <Link className="text-sm text-gray-200" href={'/services'}>About</Link>
                    <Link className="text-sm text-gray-200" href={'/services'}>Services</Link>
                    <Link className="text-sm text-gray-200" href={'/services'}>Projects</Link>
                    <Link className="text-sm text-gray-200" href={'/services'}>Certifications</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar