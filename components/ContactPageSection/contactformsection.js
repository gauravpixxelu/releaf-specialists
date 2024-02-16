import { useState } from "react";
import Image from "next/image";
import { APIurl } from "../APIurl";

export default function ContactFormSection() {

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [phone_no, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [region, setRegion] = useState('');
    const [postal_code, setPostalCode] = useState('');
    const [country, setCountry] = useState('');
    const [find_us, setFinfUs] = useState('');
    const [message, setMessage] = useState('');
    const [text, setText] = useState('');

  
    const handleSubmit = async e => {
      e.preventDefault();
      const data = { 
        first_name,
        last_name,
        dob,
        email,
        phone_no,
        address,
        city,
        state,
        region,
        postal_code,
        country,
        find_us,
        message,
        text
       };
  
      try {
        const response = await fetch(`${APIurl}create-email-contact`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        const responseData = await response.json();
        console.log(responseData);
        setText('Thank you for your message. It has been sent.');
        setFirstName('');
        setLastName('');
        setDob('');
        setEmail('');
        setPhoneNumber('');
        setAddress('');
        setCity('');
        setState('');
        setRegion('');
        setPostalCode('');
        setCountry('');
        setFinfUs('');
        setMessage('');
      } catch (error) {
        console.log(error);
        setText('Message failed to send. Please try again later.');
      }
    };

    return (

        <>
            <div className="contact-form-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
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
                           
                        </div>
                        <div className="col-md-8">
                            <div className="content-form-info">
                                <h3>Contact Form</h3>

                                <form method="post" onSubmit={handleSubmit}>

                                    <div class="all-box-form">
                                        <label for="firstName">First Name:</label>
                                        <input type="text" id="firstName" name="firstName" placeholder="Enter first name" value={first_name} onChange={e => setFirstName(e.target.value)} required />

                                        <label for="lastName">Last Name:</label>
                                        <input type="text" id="lastName" name="lastName" placeholder="Enter last name" value={last_name} onChange={e => setLastName(e.target.value)} required />
                                    </div>

                                    <div class="all-box-form">
                                        <label for="dob">Date of Birth:</label>
                                        <input type="date" id="dob" name="dob" value={dob} onChange={e => setDob(e.target.value)} required />

                                        <label for="email">Email:</label>
                                        <input type="email" id="email" name="email" placeholder="Email@domain.com" value={email} onChange={e => setEmail(e.target.value)}required />
                                    </div>

                                    <div class="all-box-form">
                                        <label for="phoneNumber">Phone Number:</label>
                                        <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Enter phone number" value={phone_no} onChange={e => setPhoneNumber(e.target.value)}  required />

                                        <label for="address">Address:</label>
                                        <input type="text" id="address" name="address" placeholder="Enter address" value={address} onChange={e => setAddress(e.target.value)} required />
                                    </div>

                                    <div class="all-box-form">
                                        <label for="city">City:</label>
                                        <input type="text" id="city" name="city" placeholder="Enter City" value={city} onChange={e => setCity(e.target.value)} required />

                                        <label for="state">State:</label>
                                        <input type="text" id="state" name="state" placeholder="Select state" value={state} onChange={e => setState(e.target.value)} required />
                                    </div>

                                    <div class="all-box-form">
                                        <label for="region">Region:</label>
                                        <input type="text" id="region" name="region" placeholder="Region" value={region} onChange={e => setRegion(e.target.value)}/>

                                        <label for="postalCode">Postal Code:</label>
                                        <input type="text" id="postalCode" name="postalCode" placeholder="Enter postal code" value={postal_code} onChange={e => setPostalCode(e.target.value)} required />
                                    </div>

                                    <div class="all-box-form">
                                        <label for="country">Country:</label>
                                        <input type="text" id="country" name="country" placeholder="USA" value={country} onChange={e => setCountry(e.target.value)} required />

                                        <label for="findUs">How did you find us?</label>
                                        <select id="findUs" name="findUs" value={find_us} onChange={e => setFinfUs(e.target.value)}>
                                            <option value="searchEngine">Search Engine</option>
                                            <option value="socialMedia">Social Media</option>
                                            <option value="friend">Friend/Family</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div class="all-box-textarea">
                                        <label for="message">Your Message:</label>
                                        <textarea id="message" name="message" rows="4" placeholder="Please enter your message here" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                                    </div>

                                    <button type="submit" className="green-btn site-btn design-submit">Submit</button>
                                    {text && <p className="error-msg">{text}</p>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

