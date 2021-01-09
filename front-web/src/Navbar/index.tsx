import './styles.css'
import { ReactComponent as Logo } from './logo.svg'
function Navbar() {
    return (
        <nav className="main-navbar">
            <Logo className="logo"/>
            <a href="home" className="logo-text">Liss Delivery (DS Delivery)</a>
        </nav>
    )
}

export default Navbar