import { useState } from 'react';
import { useRouter } from 'next/router';
import Form from 'react-bootstrap/Form';

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
      <div className="banner">
        <div className="container">
          <Form.Select aria-label="Default select example" onChange={handleSelectChange} value={selectState || ''}>
            <option value="" disabled hidden>Select State</option>
            <option value="pennsylvania">Pennsylvania</option>
            <option value="ohio">Ohio</option>
            <option value="west-virginia">West Virginia</option>
          </Form.Select>
        </div>
      </div>
    </>
  );
}
