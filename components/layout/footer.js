import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="col-md-3">
                <Image
                  src="../images/white-logo.svg"
                  width={250}
                  height={50}
                  alt="Logo"
                />
              </div>

              <div className="col-md-3">
                <h4>Company</h4>
                <ul>
                  <li><Link href="#">Intake form</Link></li>
                  <li><Link href="#">Consent to Treatment</Link></li>
                  <li><Link href="#">Requirements</Link></li>
                  <li><Link href="#">Services</Link></li>
                  <li><Link href="#">Locations</Link></li>
                  <li><Link href="#">Resources</Link></li>
                  <li><Link href="#">Card Renewals</Link></li>
                </ul>
              </div>

              <div className="col-md-3">
                <h4>Contact Us</h4>
                <ul>
                  <li>
                    <Image
                      src="../images/footer/phone.svg"
                      width={50}
                      height={50}
                      alt="Logo"
                    />
                    (833-373-5323)
                  </li>
                  <li>
                    <Image
                      src="../images/footer/time.svg"
                      width={50}
                      height={50}
                      alt="Logo"
                    />
                    Monday – Friday<br />
                    9am – 5pm
                  </li>
                </ul>
              </div>

              <div className="col-md-3">
                <h4>Subscribe to our Newsletter</h4>
                <p>Receive a step by step guide on how to apply for your medical marijuana card.</p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© Releaf Specialists. All rights reserved. All wrongs reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;