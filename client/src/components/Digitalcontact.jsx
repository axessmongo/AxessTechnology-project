import React, { useState } from 'react';
import axios from 'axios';

const Digitalcontact = () => {
  const [formData, setFormData] = useState({
    fname: '',
    email: '',
    phone: '',
    website: '',
    company: '',
    digitalmarketBudget: '',
    comments: '',
    services: {},
  });

  const [checkboxError, setCheckboxError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => {
      if (type === 'checkbox') {
        return {
          ...prevState,
          services: {
            ...prevState.services,
            [name]: checked
          }
        };
      } else {
        return {
          ...prevState,
          [name]: value
        };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/digital', formData);
      console.log('Contact created:', response.data);
      alert('Contact created');
      // Reset form fields after successful submission if needed
      setFormData({
        fname: '',
        email: '',
        phone: '',
        website: '',
        company: '',
        digitalmarketBudget: '',
        comments: '',
        services: {
           socialMediaMarketing: false,
          websiteDevelopment: false,
          performanceMarketing: false,
          eventMarketing: false,
          videoProduction: false,
          shopifyDevelopment: false,
        },
      });
    } catch (error) {
      console.error('Error creating contact:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <h3 className="secondary-header text-center pb-3">Need a Successful Project</h3>
          <h5 className="pb-3">I'M Interested In</h5>
          <div style={{ color: 'red', fontSize: "12px" }}>{checkboxError}</div>
          <form onSubmit={handleSubmit}>
            <div className='row'>
              <div className="col-md-6">
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" name="socialMediaMarketing" onChange={handleChange} value={formData.services.socialMedia} />
                  <label className="form-check-label fs-5">Social Media Marketing</label>
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" name="websiteDevelopment" onChange={handleChange} value={formData.services.websiteDevelopment} />
                  <label className="form-check-label fs-5">Website Development</label>
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" name="performanceMarketing" onChange={handleChange} value={formData.services.performanceMarketing} />
                  <label className="form-check-label fs-5">Performance Marketing</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" name="eventMarketing" onChange={handleChange} value={formData.services.eventMarketing} />
                  <label className="form-check-label fs-5">Event Marketing</label>
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" name="videoProduction" onChange={handleChange} value={formData.services.videoProduction} />
                  <label className="form-check-label fs-5">VideoProduction</label>
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" name="shopifyDevelopment" onChange={handleChange} value={formData.services.shopifyDevelopment} />
                  <label className="form-check-label fs-5">Shopify Development</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <input type="text" className="form-control" name="fname" value={formData.fname} onChange={handleChange} placeholder="Full Name" />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" name="email" value={formData.email} onChange={handleChange} placeholder="email" />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" name="phone" value={formData.phone} onChange={handleChange} placeholder="phone" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <input type="text" className="form-control" name="website" value={formData.website} onChange={handleChange} placeholder="Website" />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" name="company" value={formData.company} onChange={handleChange} placeholder="Company" />
                </div>
                <div className="mb-3">
                  <select name="digitalmarketBudget" className='form-control' value={formData.digitalmarketBudget} onChange={handleChange}>
                    <option value="">Select Budget</option>
                    <option value="Rs. 0 to Rs. 1 Lakh">Rs. 0 to Rs. 1 Lakh</option>
                    <option value="Rs. 1 Lakh to Rs. 5 Lakh">Rs. 1 Lakh to Rs. 5 Lakh</option>
                    <option value="Rs. 5 Lakh to Rs. 10 Lakh">Rs. 5 Lakh to Rs. 10 Lakh</option>
                    <option value="Rs. 10 Lakh to Rs. 25 Lakh">Rs. 10 Lakh to Rs. 25 Lakh</option>
                    <option value="Rs. 25 Lakh to Rs. 50 Lakh">Rs. 25 Lakh to Rs. 50 Lakh</option>
                    <option value="Rs. 50 Lakh to Rs. 1 Crore">Rs. 50 Lakh to Rs. 1 Crore</option>
                    <option value="More than Rs. 1 Crore">More than Rs. 1 Crore</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <textarea className="form-control" name="comments" value={formData.comments} onChange={handleChange} placeholder="Comments"></textarea>
            </div>
            <div className='d-flex justify-content-center mt-3'>
              <button className='btn btn-success text-center justify-content-center'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Digitalcontact;
