import Navigation from "./navigation";
import Link from 'next/link';

function Header() {
    return (
        <>
            <header className="site-header">
                <Navigation />
                <div className="header-btns">
                <Link href="/schedule-now" className="green-btn site-btn">Schedule Now </Link>
                <Link href="/do-you-qualify" className="yellow-btn site-btn">Do I Qualify? </Link>
                </div>
            </header>
        </>
    );
}

export default Header;