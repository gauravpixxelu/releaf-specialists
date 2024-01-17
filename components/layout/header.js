import Navigation from "./navigation";
import Link from 'next/link';

function Header() {
    return (
        <>
            <header className="site-header">
                <Navigation />
                <div className="header-btns">
                <Link href="#" className="green-btn site-btn">Schedule Now </Link>
                <Link href="#" className="yellow-btn site-btn">Do you Qualify? </Link>
                </div>
            </header>
        </>
    );
}

export default Header;