import Navigation from "./navigation";
import Link from 'next/link';

function Header() {
    return (
        <>
            <header className="site-header">
                <Navigation />
                <div className="header-btns">
                <Link href="/schedule" className="green-btn site-btn">Schedule Now </Link>
                <Link href="/am-i-eligible" className="yellow-btn site-btn">Do I Qualify? </Link>
                </div>
            </header>
        </>
    );
}

export default Header;