import Link from "next/link";
import Image from "next/image";
export default function ContactFormSection() {
    return (
        <>
            <div className="contact-form-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="content-information">
                                <h3>Contact Info</h3>
                                <ul>
                                    <li>
                                        <Image src="/images/contact/phone.png" width={50} height={50} alt="check" />
                                        (833-373-5323)
                                    </li>
                                    <li>
                                        <Image src="/images/contact/mobile.png" width={50} height={50} alt="check" />
                                        (866) 855-0875
                                    </li>
                                    <li>
                                        <Image src="/images/contact/mobile.png" width={50} height={50} alt="check" />
                                        info@releafspecialists.com
                                    </li>
                                </ul>
                            </div>
                            <div className="content-information">
                                <h3>Customer Service Hours</h3>
                                <ul>
                                    <li>
                                        <Image src="/images/contact/phone.png" width={50} height={50} alt="check" />
                                        Monday – Friday <br></br>9am – 5pm
                                    </li>
                                    <li>
                                        <Image src="/images/contact/mobile.png" width={50} height={50} alt="check" />
                                        Saturday – Sunday <br></br>Closed
                                    </li>
                                </ul>
                                <p>Certification appointments are available Monday-Friday between 9 AM to 7 PM.</p>
                            </div>
                            <div className="content-information">
                                <h3>* DISCLAIMER * </h3>
                                <p>By submitting this form, you agree to be contacted via phone, text, or email.</p>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="content-form-info">
                                <h3>Contact Form</h3>

                                <form action="/submit" method="post">

                                    <div class="all-box-form">
                                        <label for="firstName">First Name:</label>
                                        <input type="text" id="firstName" name="firstName" placeholder="Enter first name" required />

                                        <label for="lastName">Last Name:</label>
                                        <input type="text" id="lastName" name="lastName" placeholder="Enter last name" required />
                                    </div>

                                    <div class="all-box-form">
                                        <label for="dob">Date of Birth:</label>
                                        <input type="date" id="dob" name="dob" required />

                                        <label for="email">Email:</label>
                                        <input type="email" id="email" name="email" placeholder="Email@domain.com" required />
                                    </div>

                                    <div class="all-box-form">
                                        <label for="phoneNumber">Phone Number:</label>
                                        <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Enter phone number" required />

                                        <label for="address">Address:</label>
                                        <input type="text" id="address" name="address" placeholder="Enter address" required />
                                    </div>

                                    <div class="all-box-form">
                                        <label for="city">City:</label>
                                        <input type="text" id="city" name="city" placeholder="Enter City" required />

                                        <label for="state">State:</label>
                                        <input type="text" id="state" name="state" placeholder="Select state" required />
                                    </div>

                                    <div class="all-box-form">
                                        <label for="region">Region:</label>
                                        <input type="text" id="region" name="region" placeholder="Region" />

                                        <label for="postalCode">Postal Code:</label>
                                        <input type="text" id="postalCode" name="postalCode" placeholder="Enter postal code" required />
                                    </div>

                                    <div class="all-box-form">
                                        <label for="country">Country:</label>
                                        <input type="text" id="country" name="country" placeholder="USA" required />

                                        <label for="findUs">How did you find us?</label>
                                        <select id="findUs" name="findUs">
                                            <option value="searchEngine">Search Engine</option>
                                            <option value="socialMedia">Social Media</option>
                                            <option value="friend">Friend/Family</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div class="all-box-textarea">
                                        <label for="message">Your Message:</label>
                                        <textarea id="message" name="message" rows="4" placeholder="Please enter your message here" required></textarea>
                                    </div>

                                    <button type="submit" className="green-btn site-btn design-submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

