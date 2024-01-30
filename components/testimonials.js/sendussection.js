import Link from "next/link";
export default function TestimoialsSendusSection() {

    return (
        <>
            <div className="feedback-section contact-form-section">
                <div className="container">
                    <div className="main-sendus-heading">
                        <h2>Send us a <span className="light-green-txt">Testimonial</span></h2>
                        <p>To our past clients: We appreciate your comments and if you would, fill out the form with comments and a photo about your experience at Releaf Specialists. Fields marked with * are required. Please enter the Name field how you want your name to read on our website (Examples: John Doe, J. Doe, John D., John Doe Corporation)</p>
                    </div>
                    <div className="form-testimonial-page all-box-form">
                        <form action="/submit-testimonial" method="post" enctype="multipart/form-data">
                            <label for="companyName">Name of Company*</label>
                            <input type="text" id="companyName" name="companyName" required />


                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" />


                            <label for="location">Location</label>
                            <input type="text" id="location" name="location" />


                            <label for="seasonPurchased">Season/Purchased*</label>
                            <input type="text" id="seasonPurchased" name="seasonPurchased" required />


                            <label for="testimonial">My testimonial and experience at Releaf Specialists*</label>
                            <textarea id="testimonial" name="testimonial" rows="4" required></textarea>

                            <div className="choose-file-photo">
                                <label for="photo">Attach Photo</label>
                                <input type="file" id="photo" name="photo" />
                            </div>

                            <div className="file-testimonial-choose">
                                <label>
                                    <input type="checkbox" name="permission" required />
                                    I grant Releaf Specialists permission to use the photo on their website.
                                </label>
                            </div>
                            <input type="submit" class="green-btn site-btn design-submit " value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}