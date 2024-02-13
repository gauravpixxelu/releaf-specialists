import { useState } from 'react';
import { useRouter } from 'next/router';
import Form from 'react-bootstrap/Form';
import Image from "next/image";

export default function HomeBanner() {
  
  const router = useRouter();
  const [selectState, setSelectState] = useState('');

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectState(selectedValue);

    router.push(`/${selectedValue}`);
  };

  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="banner-row-code">
            <div className="banner-heading">
              <h1>Get approved for your <span>medical card online in minutes</span></h1>
              <p>Legal Access Made Easy in Pennsylvania, Ohio, & West Virginia</p>
            </div>
            <div className="form-banner-design">
              <h3>$150 For New Card | $100 For Card Renewals</h3>
              <Form.Select aria-label="Default select example" onChange={handleSelectChange} value={selectState || ''}>
                <option value="" disabled hidden>Select State</option>
                <option value="pammj">Pennsylvania</option>
                <option value="ohiomedicalmarijuanacards">Ohio</option>
                <option value="wv-mmj">West Virginia</option>
              </Form.Select>
              <div className="email-listing">
                <ul>
                  <li>
                    <Image src="../images/homepage/check-icon.svg" width={20} height={20} alt="check" />
                    Quick and Easy
                  </li>
                  <li>
                    <Image src="../images/homepage/check-icon.svg" width={20} height={20} alt="check" />
                    Money-Back Guarantee
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
