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
                            <Link class="nav-link active" aria-current="page" href="/consent">Consent to Treatment</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="/services">Services</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="/intake">Intake Form</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Locations
                            </Link>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">

                                <li><Link class="dropdown-item" href="/pammj">Pennsylvania Medical Marijuana Cards</Link></li>
                                <li><Link class="dropdown-item" href="/ohiomedicalmarijuanacards">Ohio Medical Marijuana Cards</Link></li>
                                <li><Link class="dropdown-item" href="/wv-mmj">West Virginia Medical Marijuana Cards</Link></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Resources
                            </Link>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link class="dropdown-item" href="/review-us">Review Us</Link></li>
                                <li><Link class="dropdown-item" href="/education">Medical Marijuana 101</Link></li>
                                <li><Link class="dropdown-item" href="/blog">Blog</Link></li>
                                <li><Link class="dropdown-item" href="/testimonials">Testimonials</Link></li>
                                <li><Link class="dropdown-item" href="/events">Events</Link></li>
                                <li><Link class="dropdown-item" href="/faq">Faq</Link></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Card Renewals
                            </Link>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link class="dropdown-item" href="/renewals-wv">West Virginia</Link></li>
                                <li><Link class="dropdown-item" href="/blog/renew-registration/">Pennsylvania</Link></li>
                                <li><Link class="dropdown-item" href="/card-renewal-ohio">Ohio</Link></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );

}
