import React from 'react'
import '../assets/css/Pricing.scss'

function Pricing() {
	return (
		<section className='pricing'>
			<h1 className='primary-header text-center'>Unlock Our New Features</h1>
			<div className="container pricing-table">
				<div className="pricing-card ">
					<h3 className="pricing-card-header">Personal</h3>
					<div className="price mb-5"><sup>$</sup>15<span>/MO</span></div>
					<ul>
						<li><strong>Domain</strong>- Additional Charges (Rs.800)</li>
						<li><strong>Hosting - 1</strong> Year FREE</li>
						<li><strong>Single 1 </strong> Page Website</li>
						<li><strong>SSL</strong> Certificate</li>
						<li><strong>WhatsApp </strong> Chat</li>
						<li><strong>Social </strong> Media Integration</li>
						<li><strong>Static </strong> Website</li>
					</ul>
					<a href="#" className="order-btn">Order Now</a>
				</div>

				<div className="pricing-card">
					<h3 className="pricing-card-header">Professional</h3>
					<div className="price"><sup>$</sup>30<span>/MO</span></div>
					<ul>
						<li><strong>10</strong> Websites</li>
						<li><strong>50 GB</strong> SSD</li>
						<li><strong>1</strong> Domain Name</li>
						<li><strong>20</strong> Email</li>
						<li><strong>1.5x</strong> CPU & RAM</li>
					</ul>
					<a href="#" className="order-btn">Order Now</a>
				</div>

				<div className="pricing-card">
					<h3 className="pricing-card-header">Premium</h3>
					<div className="price"><sup>$</sup>50<span>/MO</span></div>
					<ul>
						<li><strong>30</strong> Websites</li>
						<li><strong>150 GB</strong> SSD</li>
						<li><strong>1</strong> Domain Name</li>
						<li><strong>40</strong> Email</li>
						<li><strong>2x</strong> CPU & RAM</li>
					</ul>
					<a href="#" className="order-btn">Order Now</a>
				</div>

				<div className="pricing-card">
					<h3 className="pricing-card-header">Ultimate</h3>
					<div className="price"><sup>$</sup>80<span>/MO</span></div>
					<ul>
						<li><strong>100</strong> Websites</li>
						<li><strong>500 GB</strong> SSD</li>
						<li><strong>1</strong> Domain Name</li>
						<li><strong>100</strong> Email</li>
						<li><strong>4x</strong> CPU & RAM</li>
					</ul>
					<a href="#" className="order-btn">Order Now</a>
				</div>
			</div>
		</section >
	)
}

export default Pricing
