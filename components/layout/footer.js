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
                <div className="social-media-footer">
                  <Link href="https://www.facebook.com/releafspecialists/" target="_blank"><Image
                    src="../images/footer/facebook.svg"
                    width={50}
                    height={50}
                    alt="Logo"
                  /></Link>
                  <Link href="https://www.instagram.com/releaf_specialists/" target="_blank"><Image
                    src="../images/footer/instagram.svg"
                    width={50}
                    height={50}
                    alt="Logo"
                  />
                  </Link>
                  <Link href="https://www.youtube.com/channel/UCA7fq7vKbGyWUYNrB-EMi6g" target="_blank"><Image
                    src="../images/footer/youtube.svg"
                    width={50}
                    height={50}
                    alt="Logo"
                  />
                  </Link>
                </div>
              </div>

              <div className="col-md-3">
                <h4>Company</h4>
                <ul>
                  <li><Link href="/intake">Intake form</Link></li>
                  <li><Link href="/consent">Consent to Treatment</Link></li>
                  <li><Link href="/requirements">Requirements</Link></li>
                  <li><Link href="/services">Services</Link></li>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/contact">Contact Us</Link></li>
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
                <div class="newsletter-form">
                  <input type="email" class="newsletter-input" placeholder="Email address" />
                  <button type="submit" class="newsletter-button">Submit</button>
                </div>
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