import { useState } from "react";
import { APIurl } from '../APIurl';

export default function TestimoialsSendusSection() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [season, setSeason] = useState('');
    const [experience, setExperience] = useState('');
    const [image, setImage] = useState(null);
    const [checkbox, setCheckbox] = useState('');
    const [text, setText] = useState('');
  
    const handleSubmit = async e => {
      e.preventDefault();
      const data = { 
        name,
        email,
        location,
        season,
        experience,
        image,
        checkbox,
        text
       };
         
      try {
        const response = await fetch(`${APIurl}create-testimonial`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        
        const responseData = await response.json();
        console.log(responseData);
        setText('Thank you for your message. It has been sent.');
        setName('');
        setEmail('');
        setLocation('');
        setSeason('');
        setExperience('');
        setImage('');
        setCheckbox('');
      } catch (error) {
        console.log(error);
        setText('Message failed to send. Please try again later.');
      }
    };

    return (
        <>
            <div className="feedback-section contact-form-section" id="click-scroll">
                <div className="container">
                    <div className="main-sendus-heading">
                        <h2>Send us a <span className="light-green-txt">Testimonial</span></h2>
                        <p>To our past clients: We appreciate your comments and if you would, fill out the form with comments and a photo about your experience at Releaf Specialists. Fields marked with * are required. Please enter the Name field how you want your name to read on our website (Examples: John Doe, J. Doe, John D., John Doe Corporation)</p>
                    </div>
                    <div className="form-testimonial-page all-box-form">
                    <form method="post" onSubmit={handleSubmit}>
                            <label for="companyName">Name of Company*</label>
                            <input type="text" id="companyName" name="companyName" value={name} onChange={e => setName(e.target.value)} required/>

                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />

                            <label for="location">Location</label>
                            <input type="text" id="location" name="location" value={location} onChange={e => setLocation(e.target.value)} required/>

                            <label for="seasonPurchased">Season/Purchased*</label>
                            <input type="text" id="seasonPurchased" name="seasonPurchased" value={season} onChange={e => setSeason(e.target.value)} required />

                            <label for="testimonial">My testimonial and experience at Releaf Specialists*</label>
                            <textarea id="testimonial" name="testimonial" rows="4" value={experience} onChange={e => setExperience(e.target.value)} required></textarea>

                            <div className="choose-file-photo">
                                <label for="photo">Attach Photo</label>
                                <input type="file" id="photo" name="photo" value={image} onChange={e => setImage(e.target.value)} accept ="image/*" />
                            </div>

                            <div className="file-testimonial-choose">
                                <label>
                                    <input type="checkbox" name="permission" value={checkbox} onChange={e => setCheckbox(e.target.value)}/>
                                    I grant Releaf Specialists permission to use the photo on their website.
                                </label>
                            </div>

                            <button type="submit" className="green-btn site-btn design-submit">Submit</button>
                            {text && <p className="error-msg">{text}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}