import React, { useEffect, useState } from 'react'

export default function Links() {

  const [hover, setHover] = useState('');

  function setcolorfunctoin(color) {
    if (color == 'whatsappcolor') {
      setHover('whatsappcolor');
    } else if (color == 'instagramcolor') {
      setHover('instagramcolor');
    } else if (color == 'facebookcolor') {
      setHover('facebookcolor');
    } else if (color == 'linkedincolor') {
      setHover('linkedincolor');
    }
  }

  useEffect(() => {
      
    console.log(hover);
  }, [hover])

  return (
    <div className={`links-container row align-items-center text-white ${hover}`}>
      <div className="col-3">
        <a href='/' className="d-flex justify-content-center text-decoration-none text-white"
          onMouseEnter={(color) => setcolorfunctoin('whatsappcolor')}
          onMouseLeave={() => setHover('')}>
          <div className="position-relative">
            <div className="icons whatsapp">
              <i className="bi bi-whatsapp"></i>
            </div>
          </div>
          <p className='mb-0 ms-5 d-none d-lg-block px-2'>83232 32112</p>
        </a>
      </div>
      <div className="col-3">
        <a href='https://www.facebook.com/profile.php?id=61556380648787' target='_blank' className="d-flex justify-content-center text-decoration-none text-white"
          onMouseEnter={(color) => setcolorfunctoin('facebookcolor')}
          onMouseLeave={() => setHover('')}>
          <div className="position-relative">
            <div className="icons facebook">
              <i className="bi bi-facebook"></i>
            </div>
          </div>
          <p className='mb-0 ms-5 d-none d-lg-block px-2'>@Axess</p>
        </a>
      </div>
      <div className="col-3">
        <a href='https://www.instagram.com/axess_technology?igsh=MXQ2MXdpZzJnaHo2aw==' target='_blank' className="d-flex justify-content-center text-decoration-none text-white"
          onMouseEnter={(color) => setcolorfunctoin('instagramcolor')}
          onMouseLeave={() => setHover('')}>
          <div className="position-relative">
            <div className="icons instagram">
              <i className="bi bi-instagram"></i>
            </div>
          </div>
          <p className='mb-0 ms-5 d-none d-lg-block px-2'>axess_technology</p>
        </a>
      </div>
      <div className="col-3">
        <a href='/' className="d-flex justify-content-center text-decoration-none text-white"
          onMouseEnter={(color) => setcolorfunctoin('linkedincolor')}
          onMouseLeave={() => setHover('')}>
          <div className="position-relative">
            <div className="icons linkedin">
              <i className="bi bi-linkedin"></i>
            </div>
          </div>
          <p className='mb-0 ms-5 d-none d-lg-block px-2'>axess_official</p>
        </a>
      </div>
    </div>
  )
}
