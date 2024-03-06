import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

export default function Price() {

    const priceContainer = {
        development: {
            plans: [
                'domain - additional charges',
                'hosting - 1 year free',
                'single page application (5 Pages)',
                'SSL certificate',
                'whatsapp chat - additional charges',
                'social media integration',
                'static website',
                'premade website',
                'month free tech support'
            ],
            planPrice: '14999'
        },
        testing: {
            plans: [
                'basic testing environment',
                'automated testing suite',
                'performance testing',
                'security testing',
                'compatibility testing',
                'bug tracking system',
                'report generation',
                '2 weeks free support'
            ],
            planPrice: '9999'
        },
        webdevelopment: {
            plans: [
                'custom web application',
                'responsive design',
                'database integration',
                'e-commerce functionality',
                'content management system',
                'SEO optimization',
                'maintenance and updates',
                '3 month free tech support' 
            ],
            planPrice: '14999'
        },
        digitalmarketing: {
            plans: [
                'social media marketing',
                'search engine optimization (SEO)',
                'content marketing',
                'email marketing',
                'online advertising',
                'analytics and reporting',
                'monthly progress review',
                'dedicated account manager'
            ],
            planPrice: '19999'
        }
    };

    let pathname = useLocation().pathname;
    let trimpathname = pathname.slice(1);
    let showingObj = priceContainer[trimpathname]


    // return (
    //     <div>
    //         <div className="price bg">
    //             <div className="row">
    //                 <div className="col-md-3 bg-axess-gold-3 sec-1">
    //                     <div className="h-100 d-flex align-items-center justify-content-center flex-column">
    //                         <h1 className='mb-4'>Limited</h1>
    //                         <p className='secondary-text mb-0'>Yearly Plan</p>
    //                     </div>
    //                 </div>
    //                 <div className="col-md-7 bg-axess-gold-2 mid-sec py-5">
    //                     <h1 className="primary-header text-center mb-5">Unlock Our New Features</h1>
    //                     <div className="row justify-content-center align-items-center gy-3">

    //                         {showingObj.plans.map((val) => (
    //                             <div className="col-md-5">
    //                                 <li className='secondary-text mb-0'>{val}</li>
    //                             </div>
    //                         ))}
    //                     </div>

    //                 </div>
    //                 <div className="col-md-2 bg-axess-gold-3">
    //                     <div className="h-100 d-flex align-items-center justify-content-center flex-column">
    //                         <h1 className='mb-4'>{showingObj.planPrice} ₹</h1>
    //                         <button className="gold-btn m-0 green-btn"><span className="d-block">Purchase</span> <i className="bi bi-arrow-right"></i></button>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )
}
