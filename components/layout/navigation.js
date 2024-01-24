import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {

    return (

        <div className="navigation">

            <nav class="navbar navbar-expand-lg ">
                <Link class="navbar-brand" href="/">
                    <Image
                        src="../images/logo.svg"
                        width={300}
                        height={60}
                        alt="Logo"
                    />
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" href="/consent-to-treatment">Consent to Treatment</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="/services">Services</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Locations
                            </Link>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link class="dropdown-item" href="/pennsylvania-medical-marijuana-cards">Pennsylvania Medical Marijuana Cards</Link></li>
                                <li><Link class="dropdown-item" href="/ohio-medical-marijuana-cards">Ohio Medical Marijuana Cards</Link></li>
                                <li><Link class="dropdown-item" href="/west-virginia-medical-marijuana-cards">West Virginia Medical Marijuana Cards</Link></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Resources
                            </Link>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link class="dropdown-item" href="/review">Review Us</Link></li>
                                <li><Link class="dropdown-item" href="/medical-marijuana-education">Medical Marijuana 101</Link></li>
                                <li><Link class="dropdown-item" href="/blog">Blog</Link></li>
                                <li><Link class="dropdown-item" href="/testimonials">Testimonials</Link></li>
                                <li><Link class="dropdown-item" href="/events">Events</Link></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Card Renewals
                            </Link>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link class="dropdown-item" href="/west-virginia">West Virginia</Link></li>
                                <li><Link class="dropdown-item" href="/pennsylvania">Pennsylvania</Link></li>
                                <li><Link class="dropdown-item" href="/ohio">Ohio</Link></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="/contact-us">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );

}
