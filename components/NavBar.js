import Link from 'next/link'
import {useRouter} from 'next/router'

const NavBar = () => {
    const router = useRouter()

    function isActive (route){
        if(route == router.pathname)
            return "active"
        else ""
    }

    return (
        <nav>
            <div className="nav-wrapper #00695c teal darken-3">
                <Link href="/"><a className="brand-logo left">Namazon</a></Link>
                <ul id="nav-mobile" className="right ">
                    <li className={isActive('/login')}><Link href="/login"><a>LogIn</a></Link></li>
                    <li className={isActive('/signup')}><Link href="/signup"><a>SignUp</a></Link></li>
                    <li className={isActive('/create')}><Link href="/create"><a>Create</a></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;