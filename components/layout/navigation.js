import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'next/image';


export default function Navigation() {
    return (

        <div className="navigation">
            <Navbar expand="md">
                <Navbar.Brand href="/">
                    <Image
                        src="../images/logo.svg"
                        width={300}
                        height={60}
                        alt="Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/consent-to-treatment">Consent to Treatment</Nav.Link>
                        <Nav.Link href="/services">Services</Nav.Link>
                        <NavDropdown title="Locations" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Pennsylvania Medical Marijuana Cards</NavDropdown.Item>
                            <NavDropdown.Item href="#">Ohio Medical Marijuana Cards</NavDropdown.Item>
                            <NavDropdown.Item href="#">West Virginia Medical Marijuana Cards</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Resources" id="resources-nav-dropdown">
                            <NavDropdown.Item href="#">Review Us</NavDropdown.Item>
                            <NavDropdown.Item href="#">Medical Marijuana 101</NavDropdown.Item>
                            <NavDropdown.Item href="#">Blog</NavDropdown.Item>
                            <NavDropdown.Item href="#">Testimonials</NavDropdown.Item>
                            <NavDropdown.Item href="#">Events</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Card Renewals" id="renewals-nav-dropdown">
                            <NavDropdown.Item href="#">West Virginia</NavDropdown.Item>
                            <NavDropdown.Item href="#">Pennsylvania</NavDropdown.Item>
                            <NavDropdown.Item href="#">Ohio</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </div>
    );

}
