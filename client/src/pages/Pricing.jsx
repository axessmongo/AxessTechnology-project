import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
// import american from '../assets/images/pricing/american.png'
// import master from '../assets/images/pricing/master.png'
// import visa from '../assets/images/pricing/visa.png'
// import cash from '../assets/images/pricing/cash.png'
// import secure from '../assets/images/pricing/secure.png'
import Footer from '../components/Footer'
import '../assets/css/pricing.scss'


function Pricing() {
	return (
		<>
			<Navbar />
			<Banner h1={'Pricing Plans'} h2={'Get started with 900+ free, customizable templates, a smart drag and drop editor, tools to boost your online presence and more.'} h3={'Grab Our New Offers'} />
			<section className='pricing mt-5' id="pricing-section">
				<h1 className='primary-header text-center'>Unlock Our New Features</h1>
				<div className="container pricing-table">
					<div className="pricing-card ">
						<div className='shadow'>
							<h3 className="pricing-card-header">Basic</h3>
							<div className="price text-center"><sup>$</sup>15<span>/MO</span></div>
							<ul>
								<li><strong>Domain</strong>- Additional Charges (Rs.800)</li>
								<li><strong>Hosting - 1</strong> Year FREE</li>
								<li><strong>Single 1 </strong> Page Website</li>
								<li><strong>SSL</strong> Certificate</li>
								<li><strong>WhatsApp </strong> Chat</li>
								<li><strong>Social </strong> Media Integration</li>
								<li><strong>Static </strong> Website</li>
								<li><strong>Premade  </strong> Website</li>
								<li><strong>3 Month FREE </strong> Tech Support</li>
							</ul>
						</div>
						<a href="#" className="order-btn">Order Now</a>
					</div>

					<div className="pricing-card">
						<h3 className="pricing-card-header">Pro</h3>
						<div className="price text-center"><sup>$</sup>30<span>/MO</span></div>
						<ul>
							<li><strong>Domain</strong>- Additional Charges (Rs.800)</li>
							<li><strong>Hosting - 1</strong> Year FREE</li>
							<li><strong>4 to 6</strong> Pages</li>
							<li><strong>WhatsApp</strong> Chat</li>
							<li><strong>SSL </strong> Certificate</li>
							<li><strong>Full Source </strong> Code</li>
							<li><strong>5 Email – 5GB </strong> Quota Each</li>
							<li><strong>Premade  </strong> Website</li>
							<li><strong>3 Month FREE </strong> Tech Support</li>
						</ul>
						<a href="#" className="order-btn">Order Now</a>
					</div>

					<div className="pricing-card">
						<h3 className="pricing-card-header">Premium</h3>
						<div className="price text-center"><sup>$</sup>50<span>/MO</span></div>
						<ul>
							<li><strong>Domain</strong>- Additional Charges (Rs.800)</li>
							<li><strong>Hosting - 1</strong> Year FREE</li>
							<li><strong>4 to 6</strong> Pages</li>
							<li><strong>WhatsApp</strong> Chat</li>
							<li><strong>SSL </strong> Certificate</li>
							<li><strong>Full Source </strong> Code</li>
							<li><strong>5 Email – 5GB </strong> Quota Each</li>
							<li><strong>Premade  </strong> Website</li>
							<li><strong>3 Month FREE </strong> Tech Support</li>
						</ul>
						<a href="#" className="order-btn">Order Now</a>
					</div>

					<div className="pricing-card">
						<h3 className="pricing-card-header">Elite</h3>
						<div className="price text-center"><sup>$</sup>80<span>/MO</span></div>
						<ul>
							<li><strong>Domain</strong>- Additional Charges (Rs.800)</li>
							<li><strong>Hosting - 1</strong> Year FREE</li>
							<li><strong>4 to 6</strong> Pages</li>
							<li><strong>WhatsApp</strong> Chat</li>
							<li><strong>SSL </strong> Certificate</li>
							<li><strong>Full Source </strong> Code</li>
							<li><strong>5 Email – 5GB </strong> Quota Each</li>
							<li><strong>Premade  </strong> Website</li>
							<li><strong>3 Month FREE </strong> Tech Support</li>
						</ul>
						<a href="#" className="order-btn">Order Now</a>
					</div>
					{/* <div className='Pay'>
						<h5>ACCEPTED PAYMENT METHODS</h5>
						<img src={visa} className='img-sizes' alt="visa" />
						<img src={master} className='img-sizes' alt="master" />
						<img src={american} className='img-sizes' alt="american" />
					</div> */}
				</div>

			</section >
			<Footer />
		</>

	)
}

export default Pricing
