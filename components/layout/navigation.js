import Image from 'next/image';

export default function Navigation() {

    return (

        <div className="navigation">

            <nav class="navbar navbar-expand-lg ">
                <a class="navbar-brand" href="/">
                    <Image
                        src="../images/logo.svg"
                        width={300}
                        height={60}
                        alt="Logo"
                    />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/consent-to-treatment">Consent to Treatment</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/services">Services</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Locations
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Pennsylvania Medical Marijuana Cards</a></li>
                                <li><a class="dropdown-item" href="#">Ohio Medical Marijuana Cards</a></li>
                                <li><a class="dropdown-item" href="#">West Virginia Medical Marijuana Cards</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Resources
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Review Us</a></li>
                                <li><a class="dropdown-item" href="/medical-marijuana-education">Medical Marijuana 101</a></li>
                                <li><a class="dropdown-item" href="#">Blog</a></li>
                                <li><a class="dropdown-item" href="#">Testimonials</a></li>
                                <li><a class="dropdown-item" href="/events">Events</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Card Renewals
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="/west-virginia">West Virginia</a></li>
                                <li><a class="dropdown-item" href="/pennsylvania">Pennsylvania</a></li>
                                <li><a class="dropdown-item" href="/ohio">Ohio</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact-us">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );

}
